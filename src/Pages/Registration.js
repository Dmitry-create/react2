import { Button, TextField } from "@mui/material"
import { useState } from "react"
import {Link} from 'react-router-dom'
import firebaseConfig from "../services/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error] = useState()

    const hendleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const hendlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
     
        try {

            const auth = getAuth(firebaseConfig)
            await createUserWithEmailAndPassword(auth, email, password)
            
            setEmail('')
            setPassword('')
        } catch (e) {
            
            console.error(e)
        }
    }

    return <div>
       
        <form onSubmit={onSubmit}>
        <h2>Регистрация</h2>
        
       
        <TextField
            placeholder="Введите email"
            name="email"
            type= 'email'
            onChange={hendleEmailChange}
            value= {email}
            required
        />
        
        <br/>
        <TextField
            placeholder="Введите пароль"
            name="password"
            type= 'password'
            onChange={hendlePasswordChange}
            value= {password}
            required
        />
        <br/>
        {error && <p>{error}</p>}
        <br/>
        <Button variant="outlined" type="submit">Зарегистрироваться</Button>
        <p>
            Аккаунт уже существует? <Link to="login"> Войти </Link>
        </p>  
        </form>   
    </div>
}

export default Registration