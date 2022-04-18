import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
    Typography} from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AndroidIcon from '@material-ui/icons/Android';
import { useEffect } from 'react';
import{addMessage} from '../store/messages/action'
//import {getMessageList} from '../store/messages/selectors'

const MessageList = () => {
    const {chatId} = useParams();
    const allmessages = useSelector(state=>state.messages.messageList);
    const messageList = allmessages[chatId]||[];
    const dispatch = useDispatch();
    
    useEffect(()=>{
        setTimeout(() => {
            console.log(messageList);
            if (messageList.length>0 && messageList[messageList.length-1].author == !"bot") {
                dispatch(addMessage(chatId, {text:'привет друг', author:'bot'}))
            }
        }, 1500);
    },[messageList])

    

    if(!allmessages[chatId]) return null;
    

    return (
        <div>
            <List>
              {messageList.map((item) =>
                <ListItem key = {item.id}>
                  <ListItemAvatar>
                    <Avatar>
                        {item.author=='bot'?<AndroidIcon/>:<AccountCircleIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary = {item.author}
                    secondary={<Typography>
                       {item.text}
                      </Typography>}
                  />
                  <DeleteOutlinedIcon />
                </ListItem>,
                 <Divider />
              )}
            </List>   
        </div>
    );
};

export default MessageList;