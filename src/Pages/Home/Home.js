import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome to skill up platform  </h1>

                        <p className="py-6">This is the best online learning platform. And it is student friendly</p>
                        <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;