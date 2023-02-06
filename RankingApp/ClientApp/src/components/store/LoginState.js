import { useState } from 'react';
import LoginContext from './LoginContext';

const LoginState = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedInHandler = (state) => {
        setIsLoggedIn(state);
    }
    return (
        <LoginContext.Provider value={{ isLoggedIn: isLoggedIn, isLoggedInHandler: isLoggedInHandler }} >
            {props.children }
        </LoginContext.Provider>
        )
}

export default LoginState;