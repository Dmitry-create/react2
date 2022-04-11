import profileReducer from "./profile/reduser"
import { createStore } from "redux"

const store = createStore(profileReducer)

export default store