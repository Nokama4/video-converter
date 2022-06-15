import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, Form, useSubmit, useLoaderData } from "@remix-run/react";

import * as Video from '~/utils/videos.server'
import Upload from './display/Upload';

export const actions: ActionFunction = async ({ request, params }) => {
  const body = await request.formData();
  console.log(body, 'coucou');
  
}

// export const loader: LoaderFunction = async ({ request, params }) => {
//   console.log(Video);
  
// };



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

const Nav = () => {
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
    <div className='p-4 border-b-1 border-black'>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleOpen}>Upload video</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form method="post" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new video
          </Typography>
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

          <input type='text' name='title' />

          <Button type='submit'>Submit</Button>
          </Form>
        </Box>
      </Modal>
      </Stack>
    </div>
  );
}

export default Nav