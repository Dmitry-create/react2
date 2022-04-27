import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";
import chatReducer from "./chats/reducer";
import gistsReducer from "./gists/reducer";
import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import middleware from '../middleware/middleware';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


// import mySaga from './sagas/sagas'
// import createSagaMiddleware from "redux-saga";
const persistConfig ={
    key: 'root',
    storage
}

const reducers = combineReducers({

    profile:profileReducer,
    messages: messagesReducer,
    chats: chatReducer,
    gists: gistsReducer
})
const persistedReducer = persistReducer(persistConfig, reducers)

const composEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    composEnhancer(applyMiddleware(
        middleware,
        thunk
        ))
);



 export const persistor = persistStore(store);

 
// sagaMiddleware.run(mySaga)


export default store