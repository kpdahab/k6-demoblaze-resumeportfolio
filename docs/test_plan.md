## Test Plan for Swag Labs Performance Testing
- Url: https://demo.opencart.com

### Overview
This test plan outlines the performance testing strategy for the Open Cart e-commerce platform using k6. The tests include smoke testing for frontend and backend components, as well as comprehensive load testing to ensure the application can handle expected user traffic.

### Objectives
1. **Frontend Testing**: Test the landing pages of the application to ensure good end-user experience
2. **Backend Testing**: Assess the performance of the application under peak load conditions to ensure it can handle user traffic efficiently.

### Scope
- **Smoke Testing**: Run a single user test on key user interactions such as login, product browsing, and cart operations. Can be used as a Drip Test in Stage and Prod. 
- **Load Testing**: Evaluate the system's performance by simulating a realistic load over a period of time.

#### Purpose
To ensure that the critical frontend functionalities of the Open Cart application are working correctly.

#### Test Transactions
1. **Login Functionality**: Simulate user login action.
2. **Product Browsing**: User browsing the products. Front-end.
3. **Cart Operations**: Add items to cart and Checkout


#### Test Script:
1. api_test:
- Windows: k6 run .\runner\run_api_tests.js
- Mac: k6 run scripts/runner/run_api_tests.js
2. smoke_test: 
- Windows: k6 run .\runner\run_smoke_test.js
- Mac: k6 run scripts/runner/run_smoke_test.js
3. load_test: 
- Windows: k6 run .\runner\run_load_test.js
- Mac: k6 run runner/run_load_test.js