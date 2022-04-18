import profileReducer from "./profile/reducer"
import messagesReducer from "./messages/reducer"
import chatReducer from "./chats/reducer"
import { createStore, combineReducers } from "redux"

const reducers = combineReducers({

    profile:profileReducer,
    messages: messagesReducer,
    chats: chatReducer
})


const store = createStore(reducers)

export default store