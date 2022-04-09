import React from 'react';


const MessageList = ({message}) => {
    
    return (
        <div>
             {message.map( (item, index)=> (<div key = {index}> {item.author}: {item.message}</div>))} 
        </div>
    );
};

export default MessageList;