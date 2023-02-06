import { createContext } from 'react';

const LoginContext = createContext({
    isLoggedIn: false,
    isLoggedInHandler: () => { }
})

export default LoginContext;