import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1,
    iterations: '1',
};

export default function () {
    const url = 'https://parabank.parasoft.com/parabank/login.htm';
    const payload = {
        username: 'john_smith',
        password: 'Pass123'
    };

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const res = http.post(url, payload, params);
    console.log(res.status)

    check(res, {
        'status is 200': (r) => r.status === 200,
        //'login successful': (r) => r.body.includes('Welcome John Smith'),
    });
}