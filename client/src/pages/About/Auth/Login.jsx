import React from 'react'
import '../Auth/Login.css'
import { useState } from 'react'
import { loginService } from '../../../services/authServices';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../../utils/ErrorMessages';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPasword] = useState('')
    const Navigate = useNavigate()
    const handleSubmit =async (e)=>{
        try{
            e.preventDefault();
            const data = {email,password}
            const res = await loginService(data)
            toast.success(res.data.message)
            Navigate('/home')
            localStorage.setItem('todoapp',JSON.stringify(res.data))
            console.log(res);
            

        }catch(err){
            toast.error(getErrorMessage(err))
            console.log(err);

        }
        
       
    

    }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPasword(e.target.value)}/>
          </div>

          <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
