import { ADD_MESSAGE } from "./action";

const initialState = {
    messageList:{}
    
}

const messagesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:{
            const{chatId, message} = action.payload;
            const lastMessages = state.messageList[chatId]||[]
            return{
                ...state,
                    messageList:{
                        ...state.messageList,
                            [chatId]:[
                                ...lastMessages, {
                                    ...message,
                                    id:`${chatId}${lastMessages.length}`
                                    
                                }
                            ]
                    }                    
            }
        }
        default:
            return state;
    }
};
export default messagesReducer