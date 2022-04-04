
import { useEffect, useState } from 'react';
import './App.css';
import Message from'./Message';
import {AUTOR} from'./constants';
import {TextField, Button,Box} from "@material-ui/core";
import ChatList from'./ChatList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  header:{
    background:  '#27632a',
    border: 2,
    color: 'white',
    height: 70,
    
  },
  root: {
    background:  '#388e3c',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    minHeight: 700,
    padding: 20,
  },
  block:{
    background:  '#fbcc57',
    height: '100%',
    boxShadow: 3
  }
});

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
  const classes = useStyles();
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
    <>
    <Box className={classes.header} alignItems="center">
      <h1>Комната чатов</h1>
    </Box>
       <Box className={classes.root}>  
         <Grid container 
         
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            spacing={3}>
          <Grid  item xs={6} >
            <Paper className={classes.block}><ChatList chats = {[messageList, messageListSecond, messageListThird]} /></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper > 
              <TextField label="Напишите сообщение" autoFocus  variant="standard" value = {message} onChange = {hendler} />
              <Button variant="contained" color="secondary" onClick = {addMessage}>отправить сообщение</Button> 
              <Message props = {messageList}/> 
            </Paper>
          </Grid>
      </Grid>
   </Box>
  </>
  )
}

export default App;
