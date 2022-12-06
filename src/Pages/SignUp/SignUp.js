import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {

    // track user location
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const { createUser, updateUserProfile, verifyEmail, googleLogin, githubLogin } = useContext(AuthContext);
    //sign up with Email and password

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, photo)
        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                setError('')
                handleUpdateProfile(name, photo)
                handleEmailVerification();
                alert('please Verify Your Email Address')
                navigate('/')

            })
            .catch(error => setError(error.message))
    }

    const handleEmailVerification = () => {
        return verifyEmail()
            .then(result => {

            })
            .catch(error => {
                error.console.error(error)
            })
    }

    const handleUpdateProfile = (name, photo) => {

        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(result => {

            })
            .catch(error => {
                console.error(error)
            })

    }

    //sign up with google
    const googleProvider = new GoogleAuthProvider();
    const handleGoolgeSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    //sign up with github
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
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p> {error}</p>
                    </div>
                    <div onSubmit={handleSubmit} className="w-80 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name="photo" type="text" placeholder="Enter Your Photo" className="input input-bordered" />
                            </div>
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
                                    <Link to="/login" className="label-text-alt link link-hover">Already Have Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>

                        <button onClick={handleGoolgeSignIn} className="btn btn-info ">Join With Google</button>
                        <button onClick={handleGithubSignIn} className="btn mt-1 ">Join With Github</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;