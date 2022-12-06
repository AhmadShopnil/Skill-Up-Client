import React from 'react';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {

    return (
        <div>
            <Link to={`/courses/${course.id}`} ><div className="card lg:w-64  bg-base-100 shadow-xl m-5">
                <figure><div className=' '>
                    <img src={course.img} alt="Shoes" />
                </div></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {course.name}
                        <div className="badge badge-secondary">Hot</div>
                    </h2>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            <p>Price : ${course.price}</p>
                        </div>

                    </div>
                </div>
            </div></Link>






        </div>
    );
};

export default CourseCard;