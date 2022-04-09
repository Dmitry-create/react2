import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {Link} from "react-router-dom";



function ChatList ({chats}) {

    return (
        <div>
            <List>
                {Object.keys(chats).map(( value, index) => (
                <ListItem key = {index}>
                    <Link to = {`/chats/${value}`}>
                        chat№ {chats[value].name}
                    </Link>
                </ListItem>)) }  
            </List>
        </div>
    );
};

export default ChatList;