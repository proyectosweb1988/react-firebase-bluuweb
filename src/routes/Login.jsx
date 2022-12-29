import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContexr } from '../context/UserProvider';

export const Login = () => {

    const navigate = useNavigate()
    const { user, setUser} = useContext(UserContexr);

    const acceder = ()=>{
        setUser(true)
        navigate("/");
    }
  return (
    <>
    <div>Login</div>
    <button onClick={acceder}>Acceder</button>
    </>
    
  )
}
