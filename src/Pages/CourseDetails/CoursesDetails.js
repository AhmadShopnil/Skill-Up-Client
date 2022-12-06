import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryMenu from '../../Shared/CategoryMenu/CategoryMenu';
import Pdf from "react-to-pdf";
import './CourseDetails.css'
const CoursesDetails = () => {

    const ref = React.createRef();

    const courseDetails = useLoaderData()


    return (
        <div>
            <div className='cat'><CategoryMenu></CategoryMenu></div>
            <div className='text-center'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download Details Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref} className="hero coursesDetails">

                <div className="hero-content  flex-col lg:flex-row">
                    <img src={courseDetails?.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{courseDetails.name}</h1>
                        <p className="py-6">{courseDetails?.details}</p>
                        <span className='bg-lime-300 px-5 py-2 rounded-lg'>Course Duration: 6 month</span>
                        <div className="card-actions mt-3 ">
                            <div className="badge badge-outline p-4">
                                <p>$ {courseDetails?.price}</p>
                            </div>

                        </div>
                        <Link to={`/courseDetails/${courseDetails.id}`}><button className="btn btn-primary mt-5 w-50"> Get premium acccess</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;