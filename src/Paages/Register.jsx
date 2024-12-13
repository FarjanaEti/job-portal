import React, { useContext } from 'react';
import lottiAnimaton from '../assets/Animation - 1733851369003.json'
import Lottie from 'lottie-react';
import AuthContext from '../AuthProvider/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
const Register = () => {

     const {createUser }=useContext(AuthContext)
     const handleRegister=e=>{
         e.preventDefault();
         const email=e.target.email.value;
         const password=e.target.pass.value;
        console.log(email,password)
        
        createUser(email,password)
        .then(res=>{
             console.log(res.user)                 
        })
        .catch(err=>{
           console.log(err)                   
        })
     }                         
 return (
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
    <Lottie animationData={lottiAnimaton}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
);
};

export default Register;