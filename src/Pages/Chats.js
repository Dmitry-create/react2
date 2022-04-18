
import {useParams} from "react-router-dom";
import MessageList from'../Components/MessageList';
import ChatList from'../Components/ChatList';
import '../App.css';
import {useDispatch} from 'react-redux';
import {addChat,delChatName} from '../store/chats/action'
import{useState} from 'react'

function Chats() {
    const {chatId} = useParams()
   
    const[addChatName,setAddChatName] = useState(' ');
    const creatChat = (e) =>setAddChatName(e.target.value); 
    const dispatch = useDispatch();
    const addChatList = () => {
        dispatch(addChat(addChatName))
        setAddChatName(' ')
    };
    const delChatItem =() =>{
        dispatch(delChatName(chatId))
    }

    
    return (
        <div >   
            <input type="text" value = {addChatName} onChange = {creatChat}/>
            <button onClick = {addChatList} >добавить чат</button>
            
            <button onClick = {delChatItem} >удалить чат</button>

            <ChatList />
            <MessageList />
        </div>
    )
 };

 export default Chats