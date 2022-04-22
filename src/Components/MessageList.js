import React from 'react';
import { useSelector } from "react-redux";
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



const MessageList = () => {
    const {chatId} = useParams();
    const allmessages = useSelector(state=>state?.messages.messageList);
    console.log(allmessages);
    const messageList = allmessages[chatId]||[];
    
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