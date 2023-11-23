import { useReducer } from "react"
import { ADD_TODO, initial, REMOVE_TODO, todoReducer } from "./reducer/todo"

export default function AddTodo(){

    const [state, dispatch] = useReducer(todoReducer, initial)

    function handleSubmit(event){

        event.preventDefault()

        const inputValue = event.target.elements[0].value

        dispatch({type: ADD_TODO, payload: inputValue})

        event.target.reset()
        
    }
    return <> 
    <form onSubmit={handleSubmit} >
    
        <input type = "text" placeholder="todo bilgisini girin"/>
        <button type="submit">Ekle</button>

    </form>
    {state?.todos?.map((item) => <li 
    onClick={() => dispatch({type: REMOVE_TODO, payload: item.id})} 
    key={item.id}>{item.id}----{item.title}
    </li>)}

    {/* {JSON.stringify(state)} */}
    
    </>
}