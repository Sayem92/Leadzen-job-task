import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    // fetching the users data from a public json file
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>  setAllUsers(data))
   },[]);

   console.log(allUsers);

    return (
        <div>
            <h1>Users: {allUsers.length}</h1>
        </div>
    );
};

export default AllUsers;