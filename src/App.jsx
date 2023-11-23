import { useReducer, useState, useContext} from 'react'
import AddTodo from './AddTodo'
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import { DECREMENT, INCREMENT,RESET, intialSate, reducer } from './reducer/count'

function App() {
  const {counter: {state, dispatch}} = useContext(SiteContext)
  // const [count, setCount] = useState(0)

  // function increment(){
  //   setCount(prev => prev + 1 )
  // }
  // function decrement(){
  //   setCount(prev => prev - 1)
  // }
  // function reset(){
  //   setCount(0)
  // }


  return (
    <>
    <AddTodo />
    <hr />
    <h2>Count ::: {state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>

      <hr />
      <ContextAboutPage />

     

    </>
  )
}
                               
export default App






