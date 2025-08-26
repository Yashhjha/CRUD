import React, { useState } from 'react'
import { registerService } from '../../../services/authServices';
import toast from 'react-hot-toast';
import '../Auth/Register.css'
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../../utils/ErrorMessages';


const Register = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('');
    const [password,setPasword] = useState('')
    const Navigate = useNavigate()
    const handleSubmit =async (e)=>{
        try{
            e.preventDefault();
            const data = {username,email,password}
            const res = await registerService(data)
            toast.success(res.data.message)
            Navigate('/login')
            console.log(res);
            

        }catch(err){
            toast.error(getErrorMessage)
            console.log(err);

        }
        
       
    

    }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPasword(e.target.value)}/>
          </div>

          <button type="submit" className="btn" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
