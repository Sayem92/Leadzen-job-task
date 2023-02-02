import React from 'react';
import { Link } from 'react-router-dom';

const UsersDisplay = ({ user }) => {
    const { name, username, address, id } = user;


    return (
        <div className='border bg-white p-5 rounded-lg m-5 grid grid-cols-5'>
            <div className='my-auto'>
                <h3>{name}</h3>
            </div>
            <div>
                <h2><strong>CONTACT</strong></h2>
                <h3>{username}</h3>
            </div>
            <div>
                <h2> <strong>CITY</strong></h2>
                <h3>{address?.city}</h3>
            </div>
            <div>
                <h2><strong>STATE</strong></h2>
                <h3>{address?.city}</h3>
            </div>
            <div className='text-right'>

                <Link to={`/details`} > <button className="btn btn-error rounded-full ">View Details</button> </Link>
            </div>
        </div>
    );
};

export default UsersDisplay;