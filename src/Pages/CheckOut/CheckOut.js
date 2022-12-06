import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)


    const selectedCourse = useLoaderData();
    const price = selectedCourse.price;
    const vat = price * 15 / 100;
    const duration = "6 Month"
    const total = price + vat;

    const handlePayment = () => {
        alert('Order Succes')
    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Course Id</th>
                                <th>Course Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.displayName} </div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {selectedCourse.id}
                                </td>
                                <td>
                                    {duration}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th></th>
                            <td>{selectedCourse.name}</td>
                            <td>Tk. {price}</td>

                        </tr>

                        <tr>
                            <th></th>
                            <td>Add: Vat 15%</td>
                            <td>Tk. {vat}</td>

                        </tr>

                        <tr>
                            <th></th>
                            <td>Total</td>
                            <td>Tk. {total}</td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <button onClick={handlePayment} className="btn btn-primary m-10 lg:ml-48">Payment</button>



        </div>
    );
};

export default CheckOut;