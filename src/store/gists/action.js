import{API_URL_PUBLIC} from '../../Constants/gists'

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST"
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS"
export const GET_GISTS_FAILOAD = "GISTS::GET_GISTS_FAILOAD"


export const getGistsRequest = () =>({
    type:GET_GISTS_REQUEST,
});

export const getGistsSuccess = (gists) =>({
    type:GET_GISTS_SUCCESS,
    payload: gists
});
export const getGistsFaiload = (err) =>({
    type:GET_GISTS_FAILOAD,
    payload: err
});


export const getAllGists = ()=> async(dispatch)=>{
    dispatch(getGistsRequest());
    try{
        const res = await fetch(API_URL_PUBLIC);
        if(!res.ok){
            throw new Error(`status ${res.status}`)
        };
        const result = await res.json();
        dispatch(getGistsSuccess(result))
    }catch(err){
        console.log(err);
        dispatch(getGistsFaiload(err))
    }
}
