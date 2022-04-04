import React from "react";
import Dhaka from '../../images/dhaka.jpg';
const DhakaOffice = () => {
  return (
    <div className="w-[80%] md:w-[50%] mx-auto border-2 p-4 rounded-lg bg-[#247881] shadow-2xl md:flex-row flex-col flex justify-between items-center">
        <div>
            <img src={Dhaka} className="rounded-lg w-[350px] h-[250px]" alt="" />
        </div>
        <div className="text-xl text-white">
            <p>Street: 17/4 Uttara.</p>
            <p>City: Dhaka</p>
            <p>Phone: +8801264648978</p>
            <p>Email: jack200@gmail.com</p>
        </div>
    </div>
  );
};

export default DhakaOffice;
<h1>This is Dhaka office</h1>;
