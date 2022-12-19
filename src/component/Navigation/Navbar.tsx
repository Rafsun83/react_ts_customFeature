import React from 'react';
const index = () => {
    return (
        <div>
            <ul className='flex justify-center gap-10 p-6 bg-deepGreen text-balck'>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'>Modal</li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'>Toaster</li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'>Button</li>
            </ul>
        </div>
    );
};

export default index;