import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lotiieLogin from '../assets/Animation - 1733900171268.json'
import AuthContext from '../AuthProvider/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => { 
    const {signInUser}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';

        const handleLogin=e=>{
         e.preventDefault();
         const email=e.target.email.value;
         const password=e.target.pass.value;
        console.log(email,password)
        
        signInUser(email,password)
        .then(res=>{
          console.log(res.user.email)
          const user={ email :email}
          axios.post('http://localhost:3000/jwt',user, {withCredentials:true})
          .then(res=>{
            console.log(res.data)
          })
        //  navigate(from)                    
        })
        .catch(err=>{
            console.log(err)                  
        })
     }                          
   return (
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
    <Lottie animationData={lotiieLogin}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold">SignIn now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
 );
};

export default SignIn;