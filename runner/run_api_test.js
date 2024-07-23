import { login } from "../tests/backend/api_test.js";
import { stage } from "../environment/tenants/stage/index.js";
import { singleUserOptions } from "../environment/options/singleUserOptions.js";

const options = singleUserOptions;
const url= stage.apiTest.login.URL
const username = stage.apiTest.login.USERNAME
const password = stage.apiTest.login.PASSWORD


export default function(data){
    login(url, username, password);    
}