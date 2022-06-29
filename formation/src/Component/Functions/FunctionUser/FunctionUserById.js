import axios from "axios"
import { useEffect, useState } from "react"

const FunctionUserById = () => {

    const [user, setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/api/user/1')
        .then((response) => {
            setUser(response.data)
            // console.log(user)
        })
        .catch((error) => {
            console.log(error,'error appel route user par id')
        })
    },[])
    console.log(user)
}

export default FunctionUserById;