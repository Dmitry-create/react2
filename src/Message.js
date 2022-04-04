import React from 'react';


const Message = ({props}) => {
    
    return (
        <div>
             {props.map( (item)=> (<div key = {item.id}> {item.author}: {item.message}</div>))} 
        </div>
    );
};

export default Message;