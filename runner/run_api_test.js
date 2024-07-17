import { login } from "../tests/backend/api_test.js";

const users = [
    { username: 'johnsmith@gmail.com', password: 'Pass123' }
];

export let options = {
    vus: 1,
    iterations: 1,
}; 

export default function(){

    login(users.username, users.password);
    
}