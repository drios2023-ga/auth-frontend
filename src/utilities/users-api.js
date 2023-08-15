import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001/users'

export async function signUp(userData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', userData);
  }

  export async function login(credentials) {
    return sendRequest(`${BASE_URL}/auth/login`, 'POST', credentials);
  }