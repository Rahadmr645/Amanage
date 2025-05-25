import { createContext, useState } from "react";

export const context = createContext();

export const StoreContextProvider = ({ Children }) => {


    const [hello, setHello] = useState(0)
    const contextVelu = {
        hello,
        setHello
    }




    return <context.Provider value={contextVelu} >
        {Children}
    </context.Provider>
}