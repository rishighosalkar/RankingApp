import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import classes from './login.module.css';
import LoginContext from '../store/LoginContext';

const Login = () => {

    const navigate = useNavigate();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const [users, setUsers] = useState([]);
    const ctx = useContext(LoginContext);

    useEffect(() => {
        /*const fetchData = async () => {
            const res = await axios.get('http://localhost:8081/user')
            //console.log('ResponseData',res1.data)
            const resData = await res.data;
            const loadedData = [];
            for (const key in resData) {
                //console.log('LoginUsersKeys',resData[key].username);
                loadedData.push({
                    _id: resData[key]._id,
                    username: resData[key].username,
                    password: resData[key].password,
                    fName: resData[key].fName,
                    lName: resData[key].lName,
                    mobileNumber: resData[key].mobileNumber,
                    dateOfBirth: resData[key].dateOfBirth
                })
            }
            setUsers(loadedData);
        }
        fetchData()*/
        
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        fetch(`user/${username}`).then((res) => { return res.json() })
            .then(data => {
                if (data.password === password)
                setUsers(data)
            });
        console.log(users)
    }

    const navigateToSignup = (e) => {
        navigate('/signup')
        console.log("In SignUp")
    }
    return (
        <form onSubmit={onSubmitHandler} className={classes.container}>
            <div className={classes.login__controls}>
                <div className={classes.login__control}>
                    <label>Username</label>
                    <input type='text' ref={usernameInputRef} />
                </div>
                <div className={classes.login__control}>
                    <label>Password</label>
                    <input type='password' ref={passwordInputRef} />
                </div>
                <div className={classes.login__actions}>
                    <button onClick={navigateToSignup}>Sign Up</button>
                    <button type='submit'>Login</button>
                </div>
            </div>
        </form>
    )
}

export default Login;