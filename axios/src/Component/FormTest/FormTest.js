import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';

export default function FormTest() {

  // const formData = new FormData()

  // const config = {
  //   header:{
  //     "Content-type" : "multipart/form-data"
  //   }
  // }

  const [input, setInput] = useState({})

  // formData.append('username',input.username)
  // formData.append('password',input.password)

  const handleChange =(event) => {

      setInput(
          state => ({
              ...state,
              [event.target.name]:event.target.value
          }),
      )
  }
  const username = input.username
  const password = input.password
  
  const handleSubmit = (event) => {
      event.preventDefault()
      axios.post('http://localhost:8080/api/login_check',{username,password} )
      .then((response) => localStorage.setItem("userToken", response.data.token)) 
      .catch((error) => console.log("reponse NOK", error))

  }

  return (
    <Box
      component="form"
      onSubmit = {handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Form1" variant="outlined"  value={input.username || ''} onChange={handleChange} name="username"/>
      <TextField id="outlined-basic" label="Form2" variant="outlined"  value={input.password || ''} onChange={handleChange} name="password"/>

      <button type="submit">Ajouter</button>

    </Box>
  );
}