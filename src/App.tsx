import React from "react";
import tw from "tw-tailwind";
import Login from "./component/Login";
import Register from "./component/Register";
import "./App.css";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import TutorialList from "./component/TutorialList";
import AddTutorial from "./component/AddTutorial";

function App() {
  const backgroundColor = tw`bg-[#181a1b]`;
  const navItemStyle = tw`text-[24px] text-[white]`;

  return (
    <div>
      <div className="flex ">
        <nav className="bg-[#2c2f31] p-[8px] flex ">
          <Link to="/tutorials" className={navItemStyle}>
            Simba
          </Link>
          <Link to="/tutorials" className="p-[8px] block text-[#d1cdc7]/[.5] hover:text-white">  Tutorials</Link>
          <Link to="/add"       className="p-[8px] block text-[#d1cdc7]/[.5] hover:text-white">  Add      </Link>

        </nav>
        <nav className="bg-[#2c2f31] p-[8px] flex w-[100%] justify-end">
          <Link to="/login"     className="p-[8px] block text-[#d1cdc7]/[.5] hover:text-white text-[20px]">  Log in   </Link>
          <Link to="/register"  className="p-[8px] block text-[#d1cdc7]/[.5] hover:text-white text-[20px]">  Register </Link>
        </nav>
    </div>
    {/* <div className="flex container justify-center mx-auto items-center h-screen">
    <Routes>
        <Route path="/"               element={<Login/>}></Route>
        <Route path="/Login"          element={<Login/>}></Route>
    </Routes>
    </div> */}
    <div className="container mx-auto max-w-[720px] ">
      <Routes>
        <Route path="/"               element={<Login/>}></Route>
        <Route path="/Login"          element={<Login/>}></Route>
        <Route path="/register"          element={<Register/>}></Route>
        <Route path="/tutorials"      element={<TutorialList/>}></Route>
        <Route path="/add"            element={<AddTutorial/>}></Route>
      </Routes>
    </div>

    </div>
  );
}

export default App;
