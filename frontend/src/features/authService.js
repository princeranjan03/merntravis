import axios from 'axios';


const API_URL = '/api/users/';
// register
const register = async(userData) => {
    const response = await axios.post(API_URL + 'register', userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// login
const login = async(userData) => {
    const response = await axios.post(API_URL + 'login', userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//Logout
const logout = () => {
    localStorage.removeItem('user');
};


const authService = {
    register,logout, login
};
export default authService;