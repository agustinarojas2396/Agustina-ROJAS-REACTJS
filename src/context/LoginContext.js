import { createContext, useContext, useState } from "react";



export const LoginContext = createContext()

const usuarios = [
    {
        email: 'abc@abc.com',
        password: '1234'
        
    },
    {
        email: 'agussrojas.00@gmail.com',
        password: '1234'
    },
    {
        email: 'conrado@lanusse.com',
        password: 'coder'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: 'agussrojas.00@gmail.com',
        logged: true,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Email incorrecto")
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: "Password incorrecto"
        })
    }


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}