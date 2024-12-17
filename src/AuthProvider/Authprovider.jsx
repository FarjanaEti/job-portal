import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase.init';
import axios from 'axios';


const Authprovider = ({children}) => {
   const googleProvider = new GoogleAuthProvider();
   const[user,setUser]=useState(null);
   const [loading,setLoading]=useState(true)

   const createUser=(email,password)=>{
       setLoading(true)                       
    return createUserWithEmailAndPassword(auth,email,password)                        
   }

   const signInUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
   }

   const singInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
  }
   const signOutUser=()=>{
      setLoading(true)
      return signOut(auth)
   }

   useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
               setUser(currentUser)
               console.log('STATE CAPTURED', currentUser?.email)
               if(currentUser?.email){
                  const user={email:currentUser.email}
                 
                  axios.post('http://localhost:3000/jwt',user,{
                     withCredentials:true
                  })
                  .then(res => {
                     console.log('login token', res.data);
                     setLoading(false);
                 })
               }
               else{
                  axios.post('http://localhost:3000/logout',{},{
                     withCredentials:true
                  })
                  .then(res=>{
                     console.log(res.data)
                     setLoading(false) 
                  })
               }
                            
        })  
        return()=>{
           unSubscribe()                   
        }                    
   },[])
   const info={
       user,
       loading,
       createUser,
       signInUser,
       signOutUser,
       singInWithGoogle                      
   }
     return (
   <AuthContext.Provider value={info}>
         {children}                                                                                 
   </AuthContext.Provider>
  );
};

export default Authprovider;