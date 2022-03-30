import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import axios from "axios";

const Login = () => {
    const { push } = useHistory();
    const [login, setLogin ] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', login)
            .then(resp => {
                console.log(resp)
                localStorage.setItem("token", resp.data.token)
                push('/friends')
                
            })
            .catch(err => {
                console.log({err})
            })
    }

    console.log(login);

    return(
        <div>
            <h1>Login</h1>            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='username' name='username' id='username' onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;