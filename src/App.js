import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LoginPage from "./pages/LoginPage";
import NewUserPage from "./pages/NewUserPage";
import { useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/new" element={<NewUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
