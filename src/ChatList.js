import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';



function ChatList (props) {
console.log(props.chats);
    

    return (
        <div>
            <List>
                {props.chats.map(( value, index) => (
                <ListItem key = {index}>
                    <Button variant="contained" color="primary">
  chat№ {index}
</Button>
                
                </ListItem>)) }
              
            </List>
        </div>
    );
};

export default ChatList;