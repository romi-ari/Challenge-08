/* eslint-disable */
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
    
    function handleLogin(response) {
        localStorage.setItem("token", response.credential);
    }

    return(
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={handleLogin}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    )

}

export default Login