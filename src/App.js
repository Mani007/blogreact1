import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userreg from "./pages/Userreg";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home";
import Header from "./components/Header";
import MyTable from "./components/MyTable";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
        <Header/>
        <MyTable/>
          {/* <Base/> */}
          <Routes>
            <Route path="/login" element={ <Login />} />
            <Route path="/" element={ <Home />} />
            <Route path="/base" element={ <Base />} />
            <Route path="/signup" element={ <Signup/>} />
            
          </Routes>
          {/* <Signup/> */}
          {/* <Userreg/> */}
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
