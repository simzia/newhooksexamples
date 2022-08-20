
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from './container/Home';
// import SimpleExample from './container/SimpleExample';
import SimpleExample from './container/SimpleExample';
import TodoApp from './container/TodoContainer';
import { UserProvider } from "./UserContext"

function App() {
  return <>
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/simpleExample" element={<SimpleExample />} />
        <Route path="/todoapp" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>

    </UserProvider>
  </>
}

export default App