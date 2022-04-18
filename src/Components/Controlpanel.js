import { useDispatch, useSelector } from "react-redux"
import{useState} from 'react'
import{addMessage} from '../store/messages/action'
import {useParams} from "react-router-dom";
//import {getNameProfile} from "../store/profile/selectors"

 function ControlPanel() {

const[message,setMessage] = useState('');
let {chatId} = useParams();
const dispatch = useDispatch();
const name = useSelector((state)=>state.profile.name);
const changeMessage = (e) => setMessage(e.target.value);
const newMessage = {text: message, author: name};
const getMessage = () =>{
    dispatch(addMessage(chatId, newMessage))
    setMessage('')
} 
console.log(chatId);




    return <div>
        
        <input type="text" value = {message} onChange={changeMessage}/>
        <button onClick = {getMessage}>Отправить</button>
    </div>
}

export default ControlPanel