import { useState } from 'react';
import LoginContext from './LoginContext';

const LoginState = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={{isLoggedIn: isLoggedIn}} >
            {props.children }
        </LoginContext.Provider>
        )
}

export default LoginState;