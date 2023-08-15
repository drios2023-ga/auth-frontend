
import * as usersAPI from './users-api';


export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    const stringifyToken = JSON.stringify(token);
    localStorage.setItem('token', stringifyToken);
    return getUser();
  }

export async function login(credentials) {
    // Delegate the AJAX request to the users-api.js module.
    const token = await usersAPI.login(credentials);
    const stringifyToken = JSON.stringify(token);
    localStorage.setItem('token', stringifyToken);
    console.log(stringifyToken);
    return getUser();
  }

  export function getToken() {
    // getItem will return null if the key does not exists
    const token = localStorage.getItem('token');
    console.log(token)
    //if no token, return null
    if (!token) return null;
  
    //fetches payload from the token
    const payload = JSON.parse(token);
    console.log(payload);
  
    // JWT's exp expressed in seconds, not miliseconds
    // So this is 1000 seconds
    if (payload.exp * 1000 < Date.now()) {
      // Token has expired
      localStorage.removeItem('token');
      return null;
    }
    return token;
  } 
  
export function getUser() {
    const token = getToken();
    console.log(token);
    //return token ? JSON.parse(token).user : null;
    return JSON.parse(token);
  }


  export function logOut() {
    localStorage.removeItem('token');
  }