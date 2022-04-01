
import { useEffect, useState } from 'react';
import './App.css';
import Message from'./Message';
import {AUTOR} from'./constants';

function App() {
  const[messageList, setMessageList] = useState([]);
  const[message, setMessage] = useState('');

useEffect(()=>{
  console.log(messageList);
  let botAnswer = setTimeout(() => {
    if (messageList.length>0 && messageList[messageList.length-1].author == AUTOR.author) {
      setMessageList([...messageList,
        {id: Date.now(),
        message:"привет"+ messageList[messageList.length-1].author,
        author: AUTOR.bot
      }])
    }
  }, 1500);
  //clearTimeout(botAnswer) не понимаю где сделать отписку или не нужно?
},[messageList])

 const addMessage = (e) => {
  e.preventDefault()
  const newMessage = {
    id: Date.now(),
    message ,
    author: AUTOR.author
  }
  setMessageList([...messageList, newMessage])
  setMessage('')
}
 
  return (
    
   <div>
     
     <input type = "text" value = {message} onChange = {(event) => setMessage(event.target.value)} /> 
   
     <button onClick = {addMessage}>введите текст</button> 
      <Message props = {messageList}/> 
     {/* {messageList.map( (item)=> (<div key = {item.id}>  {item.message}</div>))} */}
   
   </div>

  )
}

export default App;
