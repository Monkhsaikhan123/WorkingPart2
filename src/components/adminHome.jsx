
import React, {useEffect, useState} from 'react';
import { FaTrash } from "react-icons/fa";
import axios from 'axios'
import { FaLongArrowAltRight } from "react-icons/fa";


export default function AdminHome() {
    const [data, setData] = useState([])
    const [addSection, setAddSection] = useState(false)
    const [addSection1, setAddSection1] = useState(false)
    const [userData, setUserData] = useState('')

    
    const [query, setQuery] = useState("")
    console.log(data.filter(user=>user.email.toLowerCase().includes("1")))
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };

 //Хэрэглэгчид
    useEffect(()=>{
        fetch('http://localhost:3000/getUser', {
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,'userData')
            setData(data.data)
        })
    },[])

//​http://localhost:3000/deleteUser/65827ff9af863c83570ee2e0


    const deleteUser = async(id, fname)=>{
        if(window.confirm(`Are you sure you want to delete ${fname} This user??`));
        const data = await axios.delete('/deleteUser/'+id)
        alert(data.data.message)
        window.location.href='/userDetails'
    }
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



    ///upload ProductData
    const [selects, setSelects] = useState()
    const [formData, setFormData] = useState({
        name:'',
        desc:'',
        image:'',
        price:'',
        imageURL:""

      })
        const handleOnChange = (e) => {
            const {value, name,} = e.target
            setFormData((preve)=> {
            return{
                ...preve,
                [name] : value
            }
            })
        }
        axios.defaults.baseURL = 'http://localhost:3000/'
        
        const handleSubmit = async(e) => {
            e.preventDefault()
            const data = await axios.post('/saveProduct', formData, selects)
            console.log(data)
            if(data.data.status==="error"){
              alert("Product saved successfully")
              window.location.href='/userDetails'
            }
          }



  
        return(
        <div className='container w-full h-[60rem] bg-blue-600 flex'> 
            <div className='dashboard w-1/5 h-auto bg-gray-400 flex flex-col'> 
                    
                    
                    <h1>Dashboard</h1>

                    <>Logo</>

                    <button type="button" className="text-gray-900 flex bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> <span>{userData.email}</span></button>
             
                    <button type="button"  onClick={()=> setAddSection(true)} className="text-gray-900 flex  bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><span>Хэрэглэгчид </span></button>
             
                    <button type="button" onClick={()=> setAddSection1(true)} className="text-gray-900 flex bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Бүтээгдэхүүн нэмэх </button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><span>Бүтээгдэхүүн</span></button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Хэрэглэгчийн бүтээгдэхүүн</button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Үрний мэдээлэл нэмэх</button>
             

                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Үрний мэдээлэл харах</button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Авах хүсэлтүүд харах</button>

                    <button>Banner</button>
                    <h1>Advertice</h1>

                    <button onClick={logOut} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log Out</button>
             
            </div>


            <div className='charts w-full h-auto flex flex-col bg-green-400 justify-center items-center'>
                  
            {
                addSection &&(
                    
                    <div className='relative h-full w-full overflow-x-auto shadow-md sm:rounded-lg'>
                        <input type="search" placeholder="Search Email" onChange={(e)=>setQuery(e.target.value)} className='block w-full p-4 ps-10 text-sm text-gray-900 border   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                <th className='px-6 py-3'>No</th>
                                <th className='px-6 py-3'>First Name</th>
                                <th className='px-6 py-3'>Last Name</th>
                                <th className='px-6 py-3'>Email</th>
                                <th className='px-6 py-3'>Usertype</th>
                                <th className='px-6 py-3'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                data.filter(user=>user.email.toLowerCase().includes(query)).map((user,index )=> { 
                                return( 
                                    <tr key={user.id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative'>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{index+1}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.fname}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.lname}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.Usertype}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.email}</td>
                                        <td>
                                            <button className="text-gray-900  bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"onClick={()=> deleteUser(user._id, user.fname)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                            </tbody>
                            
                        </table>
                        <button className="text-gray-900 absolute right-0 top-1 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection(false)}>Гарах</button>
                    </div>

                    )
                }

                {
                    
                        addSection1 &&(
                  

                            <form className="mx-auto w-full h-full bg-gray-200 flex justify-center items-center" onSubmit={handleSubmit}>
                                <div className='w-2/4 h-2/4'>
                                    <div className='relative z-0 w-full mb-5 group'>
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                            <input htmlFor='email' type='text 'id='name' name='name' placeholder="Name" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required onChange={handleOnChange}/>
                                        </div>

                                        <div className='relative z-0 w-full mb-5 group'>
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            <input htmlFor='image' type='text 'id='image' name='image' placeholder="Image" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required onChange={handleOnChange}/>
                                        </div>
        

                                        <div className='relative z-0 w-full mb-5 group'>
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            <input htmlFor='email' type='text 'id='desc' name='desc' placeholder="Email" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required onChange={handleOnChange}/>
                                        </div>

                                        <div className='relative z-0 w-full mb-5 group'>
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            <input htmlFor='price' type='text 'id='price' name='price' placeholder="price"className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required onChange={handleOnChange}/>
                                        </div>
                                        <select value={selects} onChange={e=>setSelects(e.target.value)}>
                                            <option>Hello</option>
                                            <option>Hello</option>
                                            <option>Hello</option>
                                        </select>

                                        <div className='relative z-0 w-full mb-5 group'>
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                            <input htmlFor='image' type='text 'id='imageURL' name='imageURL' placeholder="ImageURL" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required onChange={handleOnChange}/>
                                        </div>
   
                                        <button onClick={()=> setAddSection1(false)}>Болих</button>
                                        <button>Нэмэх</button>
                                
                                </div>
                                   
                              
                            </form>
                        )
                }
                <div>
                   
                </div>
            </div>

            


        </div>
        

        


          
        )
    }