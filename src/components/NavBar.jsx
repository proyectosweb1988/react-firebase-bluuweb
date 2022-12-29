import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContexr } from '../context/UserProvider'

export const NavBar = () => {

   const { user, setUser} = useContext(UserContexr);

   const Navigate = useNavigate();

   const handleLogin = ()=>{
       setUser(true)
       Navigate('/')
   }

   const salir = ()=>{
    setUser(false)
   }

  return (
    <div>
        {
            user ?  <NavLink to={"/"} onClick={ salir}>Salir</NavLink> : <NavLink to={"/login"} onClick={ handleLogin}>Login</NavLink>
        }
        
    
        
    </div>
  )
}
