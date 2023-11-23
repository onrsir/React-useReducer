import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";
import { DECREMENT, INCREMENT, RESET } from "./reducer/count";

export default function ContextAboutPage(){
 
    const {counter: {state, dispatch}} = useContext(SiteContext)

    return <div>
            <h2>Context API ile oluşturuldu... : </h2>
            <h2>{state}</h2>
            <button onClick={() => dispatch(INCREMENT)}>Arttır</button>
            <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
    </div>
}