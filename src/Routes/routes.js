import CheckOut from "../Pages/CheckOut/CheckOut";
import CoursesDetails from "../Pages/CourseDetails/CoursesDetails";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const { Children } = require("react");
const { createBrowserRouter } = require("react-router-dom");
const { app } = require("../firebase/firebase.config");
const { default: Main } = require("../Layout/Main");
const { default: Blog } = require("../Pages/Blog/Blog");
const { default: Login } = require("../Pages/Login/Login");
const { default: SignUp } = require("../Pages/SignUp/SignUp");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://skill-up-server-sandy.vercel.app/courses`)
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/courseDetails/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://skill-up-server-sandy.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://skill-up-server-sandy.vercel.app/courses/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }


        ]
    }
])
