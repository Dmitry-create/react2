import{GET_GISTS_REQUEST} from './action'
import{GET_GISTS_FAILOAD} from './action'
import{GET_GISTS_SUCCESS} from './action'

const STATUSES ={
    IDLE:0,
    REQUEST:1,
    SUCCESS:2,
    FAILOAD:3
}
const initialState ={
    status:STATUSES.IDLE,
    gists:[],
    error:null,
    loading:false
};

const gistsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return{
                ...state,
                status:STATUSES.REQUEST,
                loading:true
            };
        case GET_GISTS_SUCCESS:
            return{
                ...state,
                status:STATUSES.SUCCESS,
                gists:action.payload,
                loading:false
            };
        case GET_GISTS_FAILOAD:
            return{
                ...state,
                status:STATUSES.FAILOAD,
                error:action.payload,
                loading:false
            };

        default:
            return state;
    }
}

export default gistsReducer