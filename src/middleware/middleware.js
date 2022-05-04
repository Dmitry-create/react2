import { ADD_MESSAGE,addMessage } from "../store/messages/action";
import {AUTHOR} from '../Constants/constants'

const middleware = (store) => (next) => (action) => {

    if(action.type === ADD_MESSAGE && action.payload.message.author !==AUTHOR.bot){
    setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, {text:'привет друг(мидл)', author:'bot'}))
        }, 3000);

    
    }
    return next(action)
}

export default middleware;