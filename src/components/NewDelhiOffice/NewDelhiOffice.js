import React from 'react';
import NewDelhi from '../../images/delhi.png';
const NewDelhiOffice = () => {
    return (
        <div className="w-[80%] md:w-[50%] mx-auto border-2 p-4 rounded-lg bg-[#247881] shadow-2xl md:flex-row flex-col flex justify-between items-center">
        <div>
            <img src={NewDelhi} className="rounded-lg w-[350px] h-[250px]" alt="" />
        </div>
        <div className="text-xl text-white">
            <p>Street: 20/6 Pandara Road.</p>
            <p>City: New Delhi</p>
            <p>Phone: +9108120154209</p>
            <p>Email: jjindia514@gmail.com</p>
        </div>
    </div>
    );
};

export default NewDelhiOffice;