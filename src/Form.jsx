import React, {useState} from 'react';
import MainInfo from './MainInfo';
import Skills from './Skills';

export const FormContext = React.createContext();

export default (props) =>{
    const [email,setEmail] = useState("example@email.com");
    const [password,setPassword] = useState("");
    const [likes,setLikes] = useState("");
    return (
        <form>
            <FormContext.Provider value={{email, password, likes, setEmail, setPassword, setLikes}}>
            <MainInfo />
            <Skills />
            <p>Email: {email}</p>
            <p>Contraseña:</p>
            <p>Lenguajes:</p>
            </FormContext.Provider>
        </form>
    );
}