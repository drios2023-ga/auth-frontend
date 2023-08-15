import { login } from "../utilities/users-service";
import { useState, useRef } from "react";
import './LoginPage.css';

export default function LoginPage({user, setUser}){

  const [username, setUserName] = useState("");
  const refUserName = useRef(null);
  const refPassword = useRef(null);
  const refMessage = useRef("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

function handleChange(evt){
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
}

async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await login(credentials);
      setUser(response);
      setUserName(response.username);
      refUserName.current.value = "";
      refPassword.current.value = "";
      refMessage.current.value = 'logged in'
    } catch {

      refMessage.current.value = 'login failed'
      return "Log In Failed";
      
    }
  }


  return(    
    <div>
      <br />
      <p>Login</p>
      <br />          
      <form onSubmit={handleSubmit}>
        <label htmlFor="">username: </label>
        <input type="text" ref={refUserName} name="username" onChange={handleChange}/>
        <label htmlFor="">password: </label>
        <input type="text" ref={refPassword} name="password" onChange={handleChange}/>        
        <button type="submit">Submit</button>
        <input ref={refMessage}/>
      </form>
    </div>
  )

}