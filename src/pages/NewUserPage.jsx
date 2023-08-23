
import { signUp } from '../utilities/users-service';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewUserPage({fetchUser}){

const refUserName = useRef(null);
const refPassword = useRef(null);
const refMessage = useRef("");
const navigate = useNavigate();

const [credentials, setCredentials] = useState({
      username: "",
      password: "",
      });

function handleChange(evt){
      setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
}

async function handleSubmit(evt){
      evt.preventDefault();
      try {
            const user = await signUp(credentials);

            refUserName.current.value = "";
            refPassword.current.value = "";
            refMessage.current.value = 'Success!'
      } catch (err) {
            refUserName.current.value = "";
            refPassword.current.value = "";
            refMessage.current.value = 'Sign up failed.'
            return 'Sign Up Failed - Try Again';
      }

      fetchUser();
      
}

    return(    
      <div>
            <br />
            <p>New User</p>
            <br />          
            <form onSubmit={handleSubmit}>
                  <label htmlFor="">username: </label>
                  <input type="text" ref={refUserName} name="username" onChange={handleChange}/>
                  <label htmlFor="">password: </label>
                  <input type="text" ref={refPassword} name="password" onChange={handleChange}/>        
                  <button type="submit">Submit</button>
                  <input ref={refMessage} />
            </form>
      </div>
  
    );
  
  }