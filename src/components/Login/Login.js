import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFIrebase';
import './Login.css'

const Login = () => {
    const { error, signInWithGoogle, signInWithEmail, setIsLoading } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_ulr = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_ulr);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false));
    };
    return (
        <div className='login'>
            <div className="container py-5">
            <form onSubmit={signInWithEmail} className="w-75 mx-auto">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <Link>
                <button  onClick={handleGoogleLogin} className="btn btn-seccess">LogIn Google</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;