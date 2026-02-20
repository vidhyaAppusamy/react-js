import Tabs from "./components/TabSwitch/Tabs";
import ThemeToggle from "./components/Theme/ThemeToggle";
import Counter from "./components/Counter/Counter";
import Registration from "./components/Registrationform/registration";
import TodoCard from "./components/Todolist/TodoCard";
import ColorPicker from "./components/Color/ColorPicker";
import Greeting from "./components/Welcome/Greeting";
import { Calculator } from "./components/Calculator/Calculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/Fetching API/Userlist";
import './App.css';
function App() {
  return (
    <>
      <UserList/>
      </>

  )  
}

export default App;
