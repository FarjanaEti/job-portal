import React, { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthContext';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
           console.log('clicked')                   
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='m-4'>
              <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;