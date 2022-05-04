import { ADD_CHAT,DEL_CHAT } from "./action";

const initialState = {
    chatList:[]      
}


const chatReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state, 
                chatList: [
                    ...state.chatList, {
                        id: `id${state.chatList.length}`,
                        name: action.payload 
                    }
                ] 
            };
        case DEL_CHAT:
            return {
                chatList:(state.chatList.filter(elem => !Object.values(elem).includes(action.payload)))
            };
    
        default:
            return state;
    }
}

export default chatReducer;