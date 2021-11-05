
import './App.css';
import {useState,useContext} from 'react'
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
import { ThemeContext } from "./components/DemoUseContext/ThemeContext";
function App() {
  const [toggle,setToggle] = useState(false)
  const value = useContext(ThemeContext);
  return (
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
    </div>
  );
}

export default App;
