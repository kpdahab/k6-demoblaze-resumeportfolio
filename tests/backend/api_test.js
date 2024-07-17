import http from 'k6/http';
import { check } from 'k6';
import { parseHTML } from 'k6/html';

/**
 * Logs in to the application
 * 
 * @param {string} user - The username to login with
 * @param {string} pass - The password to login with
 * @returns {object} - The HTTP response from the login attemp
 */
export function login(user, pass) {
    
    const payload = JSON.stringify({
        username: user,
        password: pass
    })

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        },
        timeout: '60s' // Wait 60s for the reponse before timing out
    }

    try {

        // Step 1: Make a GET request to fetch the login page
        let res = http.get('https://demo.opencart.com/index.php?route=account/login&language=en-gb');
        console.log(res)
        check(res, { 'login page loaded': (r) => r.status === 200 });

        // Step 2: Extract the login token from the response
        let doc = parseHTML(res.body);
        let loginToken = doc.find('input[name="login_token"]').attr('value');
        console.log('Login Token:', loginToken);


        const response = http.post(`https://demo.opencart.com/index.php?route=account/login&language=en-gb&login_token=${loginToken}`, payload, params);

        const success = check(response, {
            'login successful': (res) => res.status === 200,
            'login returned JSON': (res) => res.headers === 'application/json' 
        });

        if (!success) {
            throw new Error(`Login failed with status: ${response.status}`)
        };

        return response;
    } catch(error) {
        throw new Error(`Request to login failed': ${error.message}`);
    }
}