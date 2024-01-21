import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/UserDetails'
import Reset from './components/reset'
import Userhome from './components/userhome';
import Updateuser from './components/updateUser';
import Example from './components/example';
import Example1 from './components/example1';
import Chart from './components/Chart';

//navbar import
import Company from './components/Navbar/Company'
import Navbar from './components/Navbar'
import Features from './components/Navbar/Features'
import Team from './components/Navbar/Team'
import Nested from './components/Nested'
import Navbar1 from './components/Navbar1'
function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')
  return (
   <Router>

      <div className='App'>
  
            <Routes>
                <Route exact path='/' element={isLoggedIn==='true'?<UserDetails/>: <Login/>}>

                </Route>
                <Route path='/sign-in' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/UserDetails' element={<UserDetails/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/userhome' element={<Userhome/>}/>
                <Route path='/updateuser' element={<Updateuser/>}/>

              

    {/* Navbar Route */}
                <Route  path='/userDetails' element={<Navbar1/>}>
                  <Route  path='team' element={<Team/>}/>
                  <Route  path='company' element={<Company/>}/>
                  <Route  path='features' element={<Features/>}/>
                </Route>
                <Route path='/' element={<Navbar1/>}>
                  <Route  path='team' element={<Team/>}/>
                  <Route  path='company' element={<Company/>}/>
                  <Route  path='features' element={<Features/>}/>
                </Route>

     {/* Navbar Route */}




                <Route path='/nested' element={<Nested/>}> </Route>
                <Route path='/example' element={<Example/>}/>
                <Route path='/example1' element={<Example1/>}/>
                <Route path='/chart' element={<Chart/>}/>

            </Routes>

      </div>
   </Router>
  );
}

export default App;
