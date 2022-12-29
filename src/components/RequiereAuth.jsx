import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContexr } from '../context/UserProvider'

export const RequiereAuth = ({children}) => {

    const { user } = useContext(UserContexr);

    if(!user){
        return <Navigate to='login' />
    }

  return children
}
