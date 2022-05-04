import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthProvider"

const Login = ()=>{
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    let from = location.state?.from?.pathname ||'/';

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onSubmit = async(e) =>{
        e.preventDefault()
        try{
             await auth.signin({email, password}, () => {
                setTimeout(() => navigate(from, {replace: true}), 2000)
            })
        }
        catch(e){
            // toast.error('ошибка');
            setError(e);
            console.error(e);
        }
    }
    return <div>
        <form onSubmit = {onSubmit}>
            <h1>введите данные</h1>
            <TextField
                type='email'
                value={email}
                onChange= {handleEmail}
            />
            <br/>
            <TextField
                type= 'password'
                value={password}
                onChange ={handlePassword}
            />
            <br/>
            {error&&<p>{error}</p>}
            <Button variant="contained" type= 'submit'>Войти</Button>
        </form>
    </div>
}
export default Login;
