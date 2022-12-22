import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../Component/CourseCard/CourseCard';
import './Courses.css'
const Courses = () => {

    const courses = useLoaderData()


    return (

        <div>
            <div className="flex flex-col justify-center w-full lg:flex-row">
                <div>
                    <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">

                        {
                            courses?.length ?
                                <>
                                    {
                                        courses.map(course => <p key={course.id}>
                                            <Link to={`/courses/${course.id}`}>

                                                <button className="btn btn-primary  m-5 w-50"> {course.name}</button>

                                            </Link>
                                        </p>)
                                    }
                                </>
                                :
                                <>
                                    <progress className="progress w-56"></progress>
                                </>
                        }


                    </div>
                </div>


                <div className="divider lg:divider-horizontal">OR</div>

                <div>
                    <div className="grid flex-grow  lg:grid-cols-3 gap-2  rounded-box place-items-center">

                        {
                            courses?.length ?
                                <>
                                    {
                                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                                    }
                                </>
                                :
                                <>
                                    <progress className="progress w-56"></progress>
                                </>
                        }





                    </div>
                </div>
            </div>
        </div >



    );
};

export default Courses;