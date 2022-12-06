import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, setLoading, googleLogin, githubLogin } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                setError('')
                navigate(from, { replace: true })


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }
    // const { googleLogin } = useContext(AuthContext);

    //sign up with google

    const googleProvider = new GoogleAuthProvider();
    const handleGoolgeSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }

    // sign in with github

    const githubProvider = new GithubAuthProvider();


    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p> {error}</p>
                    </div>
                    <div onSubmit={handleSignIn} className="w-80 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/signup" className="label-text-alt link link-hover">Don't Have Account?</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <button onClick={handleGoolgeSignIn} className="btn btn-info ">Join With Google</button>
                        <button onClick={handleGithubSignIn} className="btn   mt-1 ">Join With Github</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;