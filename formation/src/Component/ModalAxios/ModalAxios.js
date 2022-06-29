import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ModalAxios.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ModalAxios = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const handleClick = () => {
    //     axios.get('http://localhost:8080/api/user/1')
    //     .then((response) => {
    //         console.log(response)
            
    //     })
    //     .catch((error) => {
    //         console.log(error, 'error appel route user by id')
    //     })
    // }

    // const [user, setUser] = useState()

    // useEffect(()=>{
    //     axios.get('http://localhost:8080/api/user/2')
    //     .then((response) => {
    //         setUser(response.data)
    //         console.log(user)
    //     })
    //     .catch((error) => {
    //         console.log(error,'error appel route user par id')
    //     })
    // },[open])

    // console.log(user)

    const [user, setUser] = useState([])

    useEffect (() => {
        function getData(){
        axios.get('http://localhost:8080/api/user')
        .then(response => setUser(response.data, console.log(user)))
        .catch(error => console.log(error, "t'es une grosse merde"))
        }
        getData()
    },[])

    return (
        <div className="ModalAxios">
        <Button onClick={handleOpen}>Modal Axios</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="ModalAxios__Box">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Image d'un Utilisateur.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {
                    user.map((zizi) => 
                    <li key={zizi.id}>
                        {zizi.name_user}
                        <img src={zizi.picture_user} alt='poile' />
                    </li>
                    )
                }
            </Typography>
            </Box>
        </Modal>
        </div>
    );
}

export default ModalAxios;
