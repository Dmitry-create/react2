
import { ADD_MESSAGE_WITH_SAGA,addMessage } from "../messages/action";
import {AUTHOR} from '../../Constants/constants';
import{takeLatest, put, delay} from 'redux-saga/effects'


function* onAddMessageWithSaga(action){
    console.log(action);
    yield put(addMessage(action.payload.chatId, action.payload.message))
    if (action.payload.message.author !==AUTHOR.bot){
        yield delay(2000);
        yield put (addMessage(action.payload.chatId, {text:'привет друг()', author:'bot'}))

    }
}
function* mySaga(){
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
};

export default mySaga;