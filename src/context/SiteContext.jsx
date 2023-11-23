import { createContext, useContext, useReducer } from "react";
import { intialSate, reducer } from "../reducer/count";

const SiteContext = createContext();

function SiteContextProvider({children}){

    const [count, dispatch] = useReducer(reducer, intialSate)

    const context = {counter: { state: count, dispatch } }

return <SiteContext.Provider value={context}>
    {children}
</SiteContext.Provider>

}

export {SiteContext, SiteContextProvider}