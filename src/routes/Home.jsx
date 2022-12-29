import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContexr } from '../context/UserProvider'

export const Home = () => {

    const {use, setUser} = useContext(UserContexr)

    const navigate = useNavigate();

    const salir = ()=>{
        setUser(false);
        navigate('/login')
    }

  return (
    <>
        <div>Login</div>
        <button onClick={salir}>Salir</button>
    </>
  )
}
