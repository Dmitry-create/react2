import { addMessage } from "../store/messages/action";
import messagesReducer from "../store/messages/reducer";
import { changeName } from "../store/profile/action";
import profileReducer from "../store/profile/reducer"


describe('reducerProfile test',()=>{
    it('return state with name',() =>{
        const expected = {
            check: false,
            name: "Vasya"
        }
        const received = profileReducer(undefined, changeName("Vasya"));
        expect(received).toEqual(expected)
    });
});

describe('messagesReducer test', () => {
    it('return state with message and id', ()=>{
        const expected ={
            messageList:{
                id0: [
                    {
                    text: 'message', 
                    author: '', 
                    id:'id00'
                    }
                ]
            }
        }
        const receved = messagesReducer(undefined, addMessage('id0',{text:'message', author:''}));
        expect(receved).toEqual(expected)
    });
});