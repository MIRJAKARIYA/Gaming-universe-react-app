import React from 'react';
import NewYork from '../../images/newyork.jpg';
const NewYorkOffice = () => {
    return (
        <div className="w-[80%] md:w-[50%] mx-auto border-2 p-4 rounded-lg bg-[#247881] shadow-2xl md:flex-row flex-col flex justify-between items-center">
        <div>
            <img src={NewYork} className="rounded-lg w-[350px] h-[250px]" alt="" />
        </div>
        <div className="text-xl text-white">
            <p>Street: 20 Cooper Square</p>
            <p>City: New York</p>
            <p>Phone: +112789564879</p>
            <p>Email: aausjj658@gmail.com</p>
        </div>
    </div>
    );
};

export default NewYorkOffice;<h1>This is new york</h1>