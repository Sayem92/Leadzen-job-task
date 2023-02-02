import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';
import UsersDisplay from '../UsersDisplay/UsersDisplay';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);


    // fetching the users data from a public json file
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setCount(data?.length)

                let userData = []
                if (page === 0) {
                    for (let i = 0; i < 3; i++) {
                        let user = data[i]
                        // console.log(user);
                        userData.push(user)
                    }
                    setAllUsers(userData);
                    setLoading(false);
                };

                if (page === 1) {
                    for (let i = 3; i < 6; i++) {
                        let user = data[i]
                        console.log(user);
                        userData.push(user)
                    }
                    setAllUsers(userData);
                    setLoading(false);
                };

                if (page === 2) {
                    for (let i = 6; i < 9; i++) {
                        let user = data[i]
                        console.log(user);
                        userData.push(user)
                    }
                    setAllUsers(userData);
                    setLoading(false);
                };

                if (page === 3) {
                    for (let i = 9; i < 10; i++) {
                        let user = data[i]
                        console.log(user);
                        userData.push(user)
                    }
                    setAllUsers(userData);
                    setLoading(false);
                };

            })
    }, [page]);

    const pages = Math.ceil(count / 3);

    // console.log(allUsers);
    // console.log(page);
    // console.log(count);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto my-10'>
            <div className="bg-slate-200 py-1 rounded-lg">

                {
                    allUsers?.map((user) => <UsersDisplay
                        key={user?.id}

                        user={user}
                    ></UsersDisplay>
                    )
                }

            </div>

            <div className="mt-14">
                <div className="flex justify-center space-x-3 text-white">
                    <button
                      onClick={() => setPage(0)}
                     title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {
                        [...Array(pages).keys()].map(number =>
                            <button key={number}
                                onClick={() => setPage(number)}
                                type="button" className={page === number ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-white border-violet-400"

                                    :

                                    '"inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md text-black  border-violet-400"'}

                            >{number + 1}</button>
                        )
                    }

                    <button
                    onClick={() => setPage(3)}
                     title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default AllUsers;