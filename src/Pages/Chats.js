import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import MessageList from'../Components/MessageList';
import {AUTHOR} from'../Constants/constants';
import ChatList from'../Components/ChatList';
import '../App.css';

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

function Chats() {
    //const[messageList, setMessageList] = useState();
    const[chats, setChats] = useState(initialChats)
    const {chatId} = useParams()
    console.log(chatId);
    
//   useEffect(()=>{
//     console.log(messageList);
//     let botAnswer = setTimeout(() => {
//       if (messageList.length>0 && messageList[messageList.length-1].author == AUTHOR.author) {
//         setMessageList([...messageList,
//           {id: Date.now(),
//           message:"привет"+ messageList[messageList.length-1].author,
//           author: AUTHOR.bot
//         }])
//       }
//     }, 1500);
//     //clearTimeout(botAnswer) не понимаю где сделать отписку или не нужно?
//   },[messageList])
  
//    const addMessage = (e) => {
//     e.preventDefault()
//     const newMessage = {
//       id: Date.now(),
//       message ,
//       author: AUTHOR.author
//     };
  
   
//     setMessageList([...messageList, newMessage])
//     setMessageList('')
//   }
    // const hendler = (event) => setMessage(event.target.value);
     return (
    <div className = "Chats">
            
        <ChatList chats = {chats}/>
            
        {/* <TextField label="Напишите сообщение" autoFocus  variant="standard" value = {message} onChange = {hendler} />
        <Button variant="contained" color="secondary" onClick = {addMessage}>отправить сообщение</Button>  */}
 
        <MessageList message = {chats[chatId].message}/>
    </div>
    )
 };

 export default Chats