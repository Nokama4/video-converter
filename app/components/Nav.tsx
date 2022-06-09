import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Upload from './display/Upload';

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new video
          </Typography>
          <Upload
            sublabel='Add video to upload to S3'
            onChange={onChangeAsset}
            value={asset}
            maxSize={52000000000}
          />

          <TextField
            id="outlined-name"
            color="primary"
            label="Title"
            value={title}
            onChange={handleChange}
          />

          <Button>Submit</Button>
        </Box>
      </Modal>
      </Stack>
    </div>
  );
}

export default Nav