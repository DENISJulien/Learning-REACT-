import axios from "axios"
import { useEffect, useState } from "react"

const UserById = () => {

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

    return (
        <div>
            <div>{user.name_user} {user.name_user}</div>
            <img src = {user.picture_user} alt="Yo"/> 
        </div>
    )
}

export default UserById;