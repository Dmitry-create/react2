
import { CircularProgress } from "@material-ui/core";
import { useCallback, useEffect} from "react";
import { useDispatch,useSelector} from 'react-redux';
import { selectError, selectGists, selectLoading } from "../store/gists/selectors";
import{getAllGists} from "../store/gists/action"

const Gists = ()=>{
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

   useEffect(()=>{ 
       requestGists() 
    },[]);


   const requestGists = () =>{
      dispatch(getAllGists())
    };
    const loginList = useCallback(gists.map(item =><li key= {item.id}>{item.owner.login}</li>),[]) 
if(loading){
    return <CircularProgress/>
}

if (error){
   return <>
        <h1>error</h1>
        <button onClick={requestGists}>retry</button>
    </>
}

   return <>
           <ul>
               {loginList}
           </ul>
        </>
}

export default Gists