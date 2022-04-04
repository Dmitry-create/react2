
import { useEffect, useState } from 'react';
import './App.css';
import Message from'./Message';
import {AUTOR} from'./constants';
import {TextField, Button} from "@material-ui/core";
import ChatList from'./ChatList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  const[messageList, setMessageList] = useState([]);
  const[messageListSecond, setMessageListSecond] = useState([
    {id: Date.now(), author:'Alex',message:'lol'},
    {id: Date.now(), author:'Dmitry',message:'hi'}
  ]);
  const[messageListThird, setMessageListThird] = useState(
    [{id: Date.now(), author:'Igor',message:'WTF'},
    {id: Date.now(), author:'Jhon',message:'Welcome!'}
  ]);

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
  };

 
  setMessageList([...messageList, newMessage])
  setMessage('')
}
  const hendler = (event) => setMessage(event.target.value);
  return (
    
       <div>  
         <Grid container 
  direction="row"
  justifyContent="space-between"
  alignItems="center" 
  spacing={3}>
        <Grid item xs={6}>
          <Paper ><ChatList chats = {[messageList, messageListSecond, messageListThird]} /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper > 
            <TextField label="Напишите сообщение" autoFocus  variant="standard" value = {message} onChange = {hendler} />
      <Button variant="contained" color="secondary" onClick = {addMessage}>отправить сообщение</Button> 
      <Message props = {messageList}/> 
      </Paper>
        </Grid>
      </Grid>
   </div>

  )
}

export default App;
