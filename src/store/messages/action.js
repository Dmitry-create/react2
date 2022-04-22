import { AUTHOR } from "../../Constants/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA";

export const addMessage = (chatId, message) =>({
    type: ADD_MESSAGE,
    payload: {chatId, message}
})

export const addMessageWithThunk =(chatId, message)=>(dispatch, getState) =>{
    dispatch(addMessage(chatId, message));
    console.log(chatId,message);
    if(message.author !== AUTHOR.bot){
        console.log(chatId,message);
        setTimeout(() => {
            dispatch(addMessage(chatId, {text:'привет друг(thunk)', author:'bot'}))
        }, 1500);
    }
}


export const addMessageWithSaga = (chatId, message) =>({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: {chatId, message}
})

