import React, { useState } from 'react';

const StoreForm = () => {
    const url ="";
    const[data,setData]=useState({
        name:"",
        date:"",
        email:"",
        password:""
    })
    function formHandle(e){
        const newdata =[...data]
        newdata[e.target.id]=e.target.value;
        setData(newdata);  
        console.log(newdata);
    }

    return (
        <div className="h-screen flex flex-col items-center 
        justify-center border  rounded">
            <p className="text-gray-700 text-xl mb-3 ">
            Your Information
            </p>

    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form>
            <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
                <input type="text" 
                id="name"
                onChange={(e)=>formHandle(e)}
                value={data.name}  
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                aria-describedby="emailHelp123" placeholder="First name"/>
            </div>
            <div className="form-group mb-6">
                <input type="date" 
                id="date"
                onChange={(e)=>formHandle(e)}
                value={data.date} 
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                aria-describedby="emailHelp124" placeholder="Date"/>
            </div>
            </div>
            <div className="form-group mb-6">
            <input type="email" 
                id="email"
                onChange={(e)=>formHandle(e)}
                value={data.email} 
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                placeholder="Email address" />
            </div>
            <div className="form-group mb-6">
            <input type="password" 
                id="password"
                onChange={(e)=>formHandle(e)}
                value={data.password} 
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"/>
            </div>
            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign up</button>
        </form>
    </div>
  </div>



    );
};

export default StoreForm;
