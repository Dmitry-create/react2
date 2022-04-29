
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Profile from './Profile'
import Chats from './Chats'
import Home from './Home'
import Gists from './Gists'
import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import RequireAuth from '../hocs/RequireAuth'

function Router() {
  
    return (
    <BrowserRouter>
      <ul>
        <li><Link to = "/">homes</Link></li>
        <li><Link to = "/chats">chats</Link></li>
        <li><Link to = "/profile">profile</Link></li>
        <li><Link to = "/gists">gists</Link></li>
        <li><Link to = "/login">login</Link></li>
        <li><Link to = "/registration">registration</Link></li>
      </ul>  
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route element= {<RequireAuth/>}>
            <Route path="/chats/:chatId" element={<Chats/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/gists" element={<Gists/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="*" element={<Chats />}/>
          
      </Routes>
    </BrowserRouter>
  )
};

export default Router