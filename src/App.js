import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LoginPage from "./pages/LoginPage";
import NewUserPage from "./pages/NewUserPage";
import { useState, useEffect } from "react";
import { getUser } from "./utilities/users-service";

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState({})

async function fetchUser(){
  const u = await getUser();
  console.log(u);
  if(u){
    setUser(u);
  }
  

}

useEffect(()=>{
  fetchUser();

},[])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<LoginPage user={user} fetchUser={fetchUser} setUser={setUser} />} />
        <Route path="/new" element={<NewUserPage fetchUser={fetchUser} />} />
      </Routes>
    </div>
  );
}

export default App;
