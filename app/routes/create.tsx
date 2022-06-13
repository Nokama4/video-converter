
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, Form, useSubmit, useLoaderData } from "@remix-run/react";

import * as Video from '~/models/videos.server'
import Upload from '~/components/display/Upload';

export const action: ActionFunction = async ({ request, params }) => {
  const body = await request.formData();
  // console.log(body.get('title'), params, request);
  return null
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
  const actionData = useActionData();
  // const submit = useSubmit();
  // useLoaderData()

  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState<File | null>(null);
  const [title, setTitle] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeAsset = async (evt) => {
    const file = evt?.target?.files?.[0]

    if (!file) return setAsset(null)
    setAsset(file)
  }

  const handleSubmit = () => {
    console.log(Video.getVideos);

    // addVideo({ title, asset });
    // handleClose()
  }

  return (
  <Box sx={style}>
    <Form method="post" action='/create'>
    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
      Create a new video
    </Typography> */}
    {/* <Upload
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
    /> */}

    <input type='text' name='title' onChange={handleChange} value={title} />

    <Button type='submit'>Submit</Button>
    </Form>
  </Box>
  )
}

export default Create