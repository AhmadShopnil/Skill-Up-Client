import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const CategoryMenu = () => {
    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch('https://skill-up-server-sandy.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])


    return (
        <div className='m-auto'>

            {
                courses.map(course => <Link to={`/courses/${course.id}`} ><button className="btn  m-2 w-50"> {course.name}</button></Link>)
            }

        </div>
    );
};

export default CategoryMenu;