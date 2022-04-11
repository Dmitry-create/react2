
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
//import Link from '@material-ui/core/Link';
import Profile from './Profile'
import Chats from './Chats'
import Home from './Home'

function Router() {
  
    return (
    <BrowserRouter>
      <ul>
        <li><Link to = "/">homes</Link></li>
        <li><Link to = "/chats">chats</Link></li>
        <li><Link to = "/profile">profile</Link></li>
      </ul>  
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/chats/:chatId" element={<Chats/>} ></Route>
          <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router