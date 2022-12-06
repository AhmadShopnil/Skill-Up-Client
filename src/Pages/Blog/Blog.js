import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <h1 className='text-center text-2xl'>What is cors?</h1>
                <p>
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).The same-origin policy is a restrictive cross-origin specification that limits the ability for a website to interact with resources outside of the source domain. The same-origin policy was defined many years ago in response to potentially malicious cross-domain interactions, such as one website stealing private data from another. It generally allows a domain to issue requests to other domains, but not to access the responses.
                </p>
            </div>
            <div className='blog'>
                <h2 className='text-center text-2xl'> Why are you using firebase?</h2>
                <p>
                    Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Accelerate Development. Build Extraordinary Apps. Build Fast For Any Device.
                    <h2 className='text-center text-2xl'>What other options do you have to implement authentication?</h2>
                    <ul>
                        <li>Oracle Database.</li>
                        <li>DataStax Enterprise</li>
                        <li>Couchbase Server.</li>
                        <li>Cloudera Enterprise Data Hub.</li>
                    </ul>
                </p>
            </div>
            <div className='blog'>
                <h2 className='text-center text-2xl' >How does the private route work?</h2>
                <p>
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </p>
            </div>
            <div className='blog'>
                <h2 className='text-center text-2xl'>What is Node? How does Node work?</h2>
                <p>
                    Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

                    In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.

                    While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.
                </p>
            </div>


        </div>
    );
};

export default Blog;