
import './App.css';
import {useState,useContext,useRef} from 'react'
import Demostate from './components/DemoUseState/Demostate'
import TwoWayBinding from './components/TwoWayBinding/TwoWayBinding'
import TodoUS from './components/TodoAppUseState/TodoUS'
import Container from './components/Mount_Unmount/Container'
import Content from './components/DemoUseEffect/Content'
import Content2 from './components/DemoUseRef/Content2'
import Container3 from './components/React-Memo/Container3'
import FakeChatApp from './components/DemoUseEffect/FakeChatApp'
import DemoMemo from './components/DemoUseMemo/DemoMemo'
import Updown from './components/DemoUseReducer/UpDown'
import  TodoAppReducer from './components/DemoUseReducer/TodoAppReducer'

import UseContext from "./components/DemoUseContext/UseContext";
import { ThemeContext } from "./components/DemoUseContext/ThemeContext"
import { useStore, action } from "./components/store"
import Video from './components/DemoUseImperativeHandle/Video'
function App() {
  const [toggle,setToggle] = useState(false)
  const value = useContext(ThemeContext);

  // todo app = useReducer + useContext

  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const ref = useRef();
  const handleAdd = () => {
    dispatch(action.addTodo(todoInput));
    dispatch(action.setTodo(""));
    ref.current.focus();
  };
  // Demo video = useImperativeHandle
   const videoRef = useRef();
   const handlePlay = () =>{
     videoRef.current.play();
   }
   const handlePause = () =>{
      videoRef.current.pause();
   }
  return (
    <>
    <div className="App">
        <Demostate />
        <TwoWayBinding />
        <TodoUS/>
        <Container />
        <h3 style={{'textAlign':'center'}}>Use Effect</h3>
        <Content/>
         <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <FakeChatApp />}
        <Content2/>
        <h2  style={{'textAlign':'center'}}>React.memo HOC</h2>
        <Container3 />
        <h2  style={{'textAlign':'center'}}>Use Memo</h2>
        <DemoMemo />
        <h2  style={{'textAlign':'center'}}>Use Reducer</h2>
        <Updown />
         <h2 style={{'textAlign':'center'}}>Todo-App Reducer</h2>
         <TodoAppReducer/>
          <h2 style={{'textAlign':'center'}}>Use Context</h2>
          <button onClick={value.toggleTheme}>Toggle</button>
          <UseContext />
          <br/>
       {/* // todo app = reducer +Context */}
        <div>
            <h2 style={{'textAlign':'center'}}>TodoApp Reducer + Context</h2>
            <input
              value={todoInput}
              ref={ref}
              type="text"
              placeholder="Enter todo..."
              onChange={(e) => {
                dispatch(action.setTodoInput(e.target.value));
              }}
            />
            <button onClick={handleAdd}>ADD</button>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(action.delTodo(index));
                  }}
                >
                  {" "}
                  Delete
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(action.repairTodo(index, todoInput));
                    dispatch(action.setTodo(""));
                    ref.current.focus();
                  }}
                >
                  {" "}
                  Edit
                </button>
              </li>
            ))}
      </div>
      </div>
    <br/>
     <h3 style={{'textAlign':'center'}}>Video Use ImperativeHandle</h3>
     <div style={{'textAlign':'center'}}><Video ref= {videoRef}/>
     <button onClick={handlePlay}>Play</button>
     <button onClick={handlePause}>Pause</button></div>
   </>
  )
}

export default App;
