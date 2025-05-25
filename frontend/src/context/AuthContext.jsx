import { createContext, useState } from "react";
export const Context = createContext();

export const StoreContextProvider = ({ children }) => {


    const [hello, setHello] = useState(0);
    const [rahad,setRahad] = useState('fock you, you can do it')
    const contextVelu = {
        hello,
        setHello,
        rahad,
        setRahad
    }
    return (<Context.Provider value={contextVelu} >
        {children}
    </Context.Provider>
    )
}