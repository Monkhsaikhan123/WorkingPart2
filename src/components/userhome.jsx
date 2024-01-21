
import React, { useState, useEffect, useRef,} from 'react';
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink} from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles/styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




export default function Userhome() {


    const navigate = useNavigate()

    const [userData, setUserData] = useState('')

    useEffect(()=>{

        fetch('http://localhost:3000/userData',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type" : 'application/json',
                Accept: 'appilcation/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token")
                
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setUserData(data.data)  
        })
    }, []);


    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };
        return(

            <div className='flex justify-center flex-col'>
                <div>
                    <Navbar1/>
                </div>
                
                <div className='w-full h-auto flex  bg-blue-600 justify-center item-center'>
                   
                    <div className='w-4/6 h-55 bg-white border-gray-200 dark:bg-gray-900'>
                    <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                       
                    </div>

                    <div className='w-1/6 h-15 flex justify-center  flex-col text-sm items-center bg-white border-gray-200 dark:bg-gray-900 border'>
                            <IoPerson onClick={()=>navigate('/updateuser' , {state: userData})}  className='  top-0 w-20 h-20 rounded-full bg-blue-400'/>
                            <h3 className='text-base'>{userData.fname}{userData.lname}</h3>
                            <h3 className='text-base'>Хэрэглэгчийн Төрөл: {userData.Usertype}</h3>
                            <button className="text-gray-900  bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"onClick={logOut}>Log Out</button>

                    </div>
                   
                </div>

                <div className='w-full h-55 bg-red-200 flex justify-center items-center'>
                    <div className='w-4/6 bg-green-500'>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
           
                    </div>
                        <div className='1/6 bg-red-800'>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                            <h1>hello world</h1><br/>
                    </div>
              
                   
                </div>
            </div>
           
        )
    }