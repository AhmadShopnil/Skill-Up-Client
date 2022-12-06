import React from 'react';


const Faq = () => {



    return (
        <div className='mx-2 lg:mx-60'>

            <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Is this platform is free ?
                </div>
                <div className="collapse-content">
                    <p>No this is not free</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How long the duration of courses ?
                </div>
                <div className="collapse-content">
                    <p>6 Month+</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Can i get support after finished a course ?
                </div>
                <div className="collapse-content">
                    <p>Yes</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Why should i choses this platform ?
                </div>
                <div className="collapse-content">
                    <p>This is the student friendly platform.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Is it online
                </div>
                <div className="collapse-content">
                    <p>Yes this is online platform</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;