import React from "react";
import SignupForm from "./SignupForm";
import classes from './signup.module.css'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    function getItems() {
        fetch(`user`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Unable to get items.', error));
    }
    const saveUserDataHandler = (enteredUserData) => {
        //const userData = JSON.stringify(enteredUserData);
        //console.log("Signup.js",userData);
        /*axios.post('http://localhost:8081/user', enteredUserData)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                alert(err);
                navigate('/signup');
            });*/
        fetch(`user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredUserData)
        })
         .catch(error => console.error('Unable to update item.', error));
        navigate('/rank-items');
    }

    const cancelSignupDataHandler = () => {
        navigate('/login');
    }

    return (
        <div className={classes.signup}>
            <SignupForm onCancel={cancelSignupDataHandler}
                onSaveUserData={saveUserDataHandler} />
        </div>
    )
}

export default Signup;