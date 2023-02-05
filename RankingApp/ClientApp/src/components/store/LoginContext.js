import { createContext } from 'react';

const LoginContext = createContext({
    isLoggedIn: false
})

export default LoginContext;