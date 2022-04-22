
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {Link} from "react-router-dom";
import Controlpanel from "./Controlpanel";
import { useSelector} from 'react-redux';


function ChatList () {
    const chat = useSelector(state=>state.chats.chatList);
console.log(chat);
    if(chat.length<1) return null;

    return (
        <div>
            <List>
                {chat.map(( value, index) => (
                <ListItem key = {index}>
                    <Link to = {`/chats/${value.id}`}>
                        chat№ {value.name}
                    </Link>
                </ListItem>))}  
            </List>
            
            <Controlpanel/>
        </div>
    );
};

export default ChatList;