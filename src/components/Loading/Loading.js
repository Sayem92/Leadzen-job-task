import React from 'react';

const Loading = () => {
    return (
        <div className='my-20 md:my-60'>
            <div className='flex justify-center items-center text-yellow-400'>
                <h1 className='text-7xl'>L</h1>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-500'></div>
                <h1 className='text-7xl'>ading...</h1>
            </div>
        </div>
    );
};

export default Loading;