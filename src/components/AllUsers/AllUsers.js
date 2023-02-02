import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UsersDisplay from '../UsersDisplay/UsersDisplay';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    // fetching the users data from a public json file
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, []);

    console.log(allUsers);

    return (
        <div className='container mx-auto my-10'>
            <div className="bg-slate-200 py-1 rounded-lg">

                {
                    allUsers?.map((user) => <UsersDisplay
                        key={user.id}

                        user={user}
                    ></UsersDisplay>
                    )
                }

            </div>






        </div>
    );
};

export default AllUsers;