import http from 'k6/http';
import { check } from 'k6';
import encoding from 'k6/encoding';

/**
 * Logs in to the application
 * 
 * @param {string} url - The url to login with
 * @param {string} user - The username to login with
 * @param {string} pass - The password to login with
 * @returns {string} - The Auth_token from the login attempt
 */
export function login(url, user, pass) {
  
    // Base64 encode the password
    const encodedPassword = encoding.b64encode(pass);

    const payload = JSON.stringify({
        username: user,
        password: encodedPassword
    })

    const params = {
        headers: {
            'Content-Type': 'application/json' 
        },
        //timeout: '60s' // Wait 60s for the reponse before timing out
    }

    try {

        // Login endpoint    
        const endpoint = `${url}/login`

        // Send the POST request to the Login Endpoint
        const response = http.post(endpoint, payload, params);

        // Check the response
        const success = check(response, {
            'status is 200': (r) => r.status === 200,
            'login successful': (r) => r.json('Auth_token') !== ''
        });

        if (!success) {
            throw new Error(`Login failed with status: ${response.status}`)
        };

        // Extract the Auth_token
        const body = response.body
        const authTokenMatch = body.match(/"Auth_token: ([^"]+)"/);
        if (!authTokenMatch) {
            throw new Error('Auth_token not found in the response body');
        }
        const authToken = authTokenMatch[1];
        console.log('Auth_token: ', authToken)

        // Return Auth_token    
        return authToken;
    } catch(error) {
        throw new Error(`Request to login failed': ${error.message}`);
    }
}