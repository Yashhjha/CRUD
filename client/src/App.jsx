import React from 'react'
import About from './pages/About/About'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/About/Auth/Login'
import Register from './pages/About/Auth/Register'
import Todo from './pages/About/Todo/Todo.jsx'
import Landing from './pages/About/Landing/Landing';
import { Toaster } from 'react-hot-toast'
import Home from './pages/About/Home/Home.jsx'




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Landing/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/About' element={<About/>}/>
    <Route path='/todo' element={<Todo/>}/>
    
  

</Routes>
<Toaster/>
</>
  )
}

export default App
