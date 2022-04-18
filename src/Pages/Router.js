import {useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Profile from './Profile'
import Chats from './Chats'
import Home from './Home'
import React from "react";
import ChatList from '../Components/ChatList';


const initialChats = {
  id1:{
      name:'Chat 1',
      message:[
          {author:'Alex', message:'lol'},
          {author:'Dmitry', message:'hi'}
      ] 
  },
  id2:{
      name:'Chat 2',
      message:[
          { author:'Igor', message:'WTF'},
          { author:'Jhon', message:'Welcome!'}
      ]
  }
}

function Router() {
  
  const[chats, setChats] = useState(initialChats)

    return (
    <BrowserRouter>
      <ul>
        <li><Link to = "/">homes</Link></li>
        <li><Link to = "/chats">chats</Link></li>
        <li><Link to = "/profile">profile</Link></li>
      </ul>  
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chats/:chatId" element={<Chats/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Chats />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router