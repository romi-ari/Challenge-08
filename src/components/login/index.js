import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
    
    function handleLogin(response) {
        localStorage.setItem("token", response.credential);
    }

    return(
        <GoogleOAuthProvider clientId='1055147214459-4rto09ouqlnqtvvipl6gmlfst6eghdmj.apps.googleusercontent.com'>
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