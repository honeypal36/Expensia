import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter correct email address.");
      return;
    }
    if(!password){
      setError("Please enter the password.");
      return;
    }
    setError("");
  }

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-medium text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-600 mt-[3px] mb-7 '>
          Please enter your details to login
        </p>

      <form onSubmit={handleLogin}>
        <Input 
          type="text" 
          value={email} 
          onChange={({target}) => setEmail(target.value)} 
          label="Email Address"
          placeholder='honey@example.com'
        />
        <Input 
          type="password" 
          value={password} 
          onChange={({target}) => setPassword(target.value)} 
          label="Password"
          placeholder='Min 8 characters'
        />

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button type='submit' className='btn-primary'>
          LOGIN
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>
          Don't have an account?{""}
          <Link className='font-medium text-primary hover:underline' to="/signup">SignUp</Link>
        </p>
      </form>
      </div>
    </AuthLayout>
  )
}

export default Login
