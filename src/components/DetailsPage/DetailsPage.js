import React, { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

const DetailsPage = () => {
    const [user, setUser] = useState({});
    const { name, username, address, email, phone } = user;
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState('visible');

    useEffect(() => {
        setLoading(true);
        const id = localStorage.getItem('id');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {

                const userDetails = data?.filter(use => use.id === parseInt(id));

                setUser(userDetails[0])
                setLoading(false);
            })

    }, []);


    if (loading) {
        return <Loading></Loading>
    }

    // console.log(hide);
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-slate-200 py-1 rounded-lg'>
                <div className='border bg-white p-5 rounded-lg m-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 space-y-3'>
                    <div>
                        {
                            hide === 'visible' &&
                            <h3 className='mt-5'>{name}</h3>
                        }
                    </div>
                    <div>
                        <h2><strong>CONTACT</strong></h2>
                        {
                            hide === 'visible' &&
                            <h3>{username}</h3>
                        }
                    </div>
                    <div>
                        <h2> <strong>CITY</strong></h2>
                        {
                            hide === 'visible' &&
                            <h3>{address?.city}</h3>
                        }
                    </div>
                    <div>
                        <h2><strong>STATE</strong></h2>
                        {
                            hide === 'visible' &&
                            <h3>{address?.city}</h3>
                        }
                    </div>
                    <div className=' lg:text-right'>

                        {
                            hide === 'hide' ?

                                <button
                                    onClick={() => setHide('visible')}
                                    className="btn btn-success rounded-full ">Visible Details</button>
                                :
                                <button
                                    onClick={() => setHide('hide')}
                                    className="btn btn-error rounded-full ">Hide Details</button>
                        }
                    </div>
                </div>

                <div className='mx-6 md:mx-8 px-4 md:px-8 py-5 rounded-xl mb-4 shadow-xl bg-white'>
                    <h1 className='mb-2'><strong>Description</strong> </h1>
                    {
                        hide === 'visible' &&
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque est qui beatae ipsum laborum magnam dolorum nihil ex, cum repellendus cupiditate hic sapiente inventore dicta obcaecati voluptate, molestiae consectetur, explicabo incidunt rerum nisi amet accusantium tenetur nemo. Temporibus, vero eius adipisci itaque neque optio cumque iusto, dolorem blanditiis soluta aut? </p>
                    }

                    <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
                        <div className='space-y-2'>
                            <div>
                                <h2><strong>Contact Person</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{username}</h3>
                                }
                            </div>
                            <div>
                                <h2> <strong>Designation</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{name}</h3>
                                }
                            </div>
                            <div>
                                <h2><strong>Emails</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{email}</h3>
                                }
                            </div>
                            <div>
                                <h2><strong>Phones</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{phone}</h3>
                                }
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <h2><strong>Address</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{address?.street}</h3>
                                }
                            </div>
                            <div>
                                <h2> <strong>City</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{address?.city}</h3>
                                }
                            </div>
                            <div>
                                <h2><strong>State</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>{address?.city}</h3>
                                }
                            </div>
                            <div>
                                <h2><strong>Country</strong></h2>
                                {
                                    hide === 'visible' &&
                                    <h3>India</h3>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;