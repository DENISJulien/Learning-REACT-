import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormTest from '../FormTest/FormTest';
import './ModalTest.scss';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 1000,
//   bgcolor: 'red',
//   border: '2px solid #000',
//   borderRadius:'1rem',
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Modal">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Modal__Box" >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titre
          </Typography>

            <FormTest/>

        </Box>
      </Modal>
    </div>
  );
}