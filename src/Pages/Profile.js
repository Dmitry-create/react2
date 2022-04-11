import  {checkedAction} from "../store/profile/action";
import { useSelector,useDispatch } from "react-redux";
import { useCallback, useState } from "react";

function Profile() {
    const dispatch = useDispatch();
    const {check, note} = useSelector(state => state);
    const setChecked = () => dispatch(checkedAction);
   
    console.log(check, note);

    return <div>
            <h1>Нажмите checkbox</h1>
            <input
                type = "checkbox"
                onClick={setChecked}
            />
            <h1>{check? note : '' }</h1>
        </div>
};

export default Profile