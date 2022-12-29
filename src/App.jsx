import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { NavBar } from './components/NavBar'
import { UserContexr } from './context/UserProvider'
import { RequiereAuth } from './components/RequiereAuth'

function App() {

 const {user} = useContext(UserContexr)
  console.log(user)
  return (
    <>
      <NavBar />
      <Routes>
       
          <Route path='/' element={ <RequiereAuth><Home /></RequiereAuth> } />
        
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </>
  )
}

export default App
