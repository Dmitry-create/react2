import  {changeName} from "../store/profile/action";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
//import {getNameProfile} from "../store/profile/selectors"

function Profile() {
    const[value, setValue] = useState('');
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.profile.name);
    const setChecked = () => dispatch(changeName(value));
    const setName = (e) => setValue(e.target.value)

    return <div>
            <h1>Введите имя</h1>
            <input
                type = "text"
                value ={value}
                onChange={setName}
            />
            <button onClick = {setChecked}>Отправить</button>
            <h1>Здравствуйте {name}</h1>
        </div>
};

export default Profile