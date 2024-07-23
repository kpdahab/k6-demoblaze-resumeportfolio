# k6-demoblaze-resumeportfolio
https://www.demoblaze.com/

## Overview
This project demonstrates the use of k6 for performance testing on the Demo Blaze site. It includes tests for frontend and backend functionalities, as well as various load testing scenarios.

## Project Structure
- **tests/**: Contains the k6 test scripts for different purposes.
  - **backend/**: Scripts for backend API tests and transaction tests.
    - `api_test.js`: Script for testing API endpoints.
    - `transactions_test.js`: Script for testing transaction-related endpoints.
  - **frontend/**: Scripts for frontend tests such as login, product pages, and cart operations.
    - `login_test.js`: Script for testing login functionality.
    - `product_page_test.js`: Script for testing product page.
    - `cart_test.js`: Script for testing cart operations.
  - **scenarios/**: Comprehensive testing scenarios including load, smoke, and stress tests.
    - `load_test.js`: Script for load testing.
    - `smoke_test.js`: Script for smoke testing.
    - `stress_test.js`: Script for stress testing.
- **runner/**: Script to run a combination of tests.
  - `run_api_test.js`: Script to orchestrate running of multiple test scripts.
  - `run_smoke_test.js`: Script to orchestrate running of multiple test scripts.
  - `run_load_test.js`: Script to orchestrate running of multiple test scripts.    
- **helpers/**: Contains helper functions.  
- **results/**: Stores the results of the test runs.
  - **backend/**: Results for backend tests.
  - **frontend/**: Results for frontend tests.
  - **scenarios/**: Results for scenario-based tests.
- **environment/**: Configuration for environment-specific settings.
  - `index.js`: Environment configuration settings.
  - `metrics.js`: Script for initializing metrics and variables.
  - `users.js`: Contains usernames and passwords for testing.
  - **tenants/**: Configuration for tenant-specific settings.
    - `index.js`: Tenant configuration settings.
    - `api_test.js`: Tenant-specific configuration for API tests.
    - `smoke_test.js`: Tenant-specific configuration for smoke tests.
    - `load_test.js`: Tenant-specific configuration for load tests.
    - **stage/**: Configuration for stage-specific settings.
      - `index.js`: Stage-specific configuration settings.
      - `api_test.js`: Stage-specific configuration for API tests.
      - `smoke_test.js`: Stage-specific configuration for smoke tests.
      - `load_test.js`: Stage-specific configuration for load tests.
    - **prod/**: Configuration for prod-specific settings.
      - `index.js`: Prod-specific configuration settings.
      - `api_test.js`: Prod-specific configuration for API tests.
      - `smoke_test.js`: Prod-specific configuration for smoke tests.
      - `load_test.js`: Prod-specific configuration for load tests.
- **docs/**: Documentation including performance analysis and test plan.
  - `performance_analysis.md`: Detailed analysis of the performance test results.
  - `test_plan.md`: Test plan outlining the objectives, scope, and approach of the performance tests.

## Running Tests
1. Clone the repository:
   ```bash
   git clone https://github.com/kpdahab/k6-demoblaze-resumeportfolio.git
   cd k6-demoblaze-resumeportfolio
   brew install k6
   k6 run runner/run_api_test.js