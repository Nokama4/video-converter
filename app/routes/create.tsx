
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import type { ActionFunction } from "@remix-run/node";
import {  Form } from "@remix-run/react";
import type { UploadHandler } from "@remix-run/server-runtime";
import {
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";import * as Video from '~/models/videos.server'

import { s3UploadHandler } from "~/utils/s3.server";
import Upload from '~/components/display/Upload';

export const action: ActionFunction = async ({ request, params }) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(s3UploadHandler, createMemoryUploadHandler());

  const formData = await parseMultipartFormData(request, uploadHandler);
  const title = formData.get("title")?.toString();
  const src = formData.get("file")?.toString();

  if (title && src) {
    const startIndex = src.indexOf('nft/') - 'nft/'.length;
    const endIndex = src.lastIndexOf('/');
    const id = src.substring(startIndex, endIndex);
    
    const video = await Video.addVideo({ title, src, id });

    return json({ video });
  }

  return null;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const Create = () => {
  const [asset, setAsset] = useState<File | null>(null);
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeAsset = async (evt) => {
    const file = evt?.target?.files?.[0]

    if (!file) return setAsset(null)
    setAsset(file)
  }

  return (
  <Box sx={style}>
    <Form method="post" action='/create' encType="multipart/form-data">
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Create a new video
    </Typography>
    <Upload
      sublabel='Add video to upload to S3'
      name='asset'
      onChange={onChangeAsset}
      value={asset}
      maxSize={52000000000}
    />

    <TextField
      id="outlined-name"
      name='title'
      color="primary"
      label="Title"
      value={title}
      onChange={handleChange}
    />

    <Button type='submit'>Submit</Button>
    </Form>
  </Box>
  )
}

export default Create
