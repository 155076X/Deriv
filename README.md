# WebSocket API Test for States List
This project contains an end-to-end (E2E) test using Cypress to verify the functionality of a WebSocket API that fetches a list of states. The test establishes a WebSocket connection, sends a request for the states list, and validates the response.

# Table of Contents
1. Overview
2. Pre-requisites
3. Installation 
4. Running Tests
5. Test Structure
6. Test Details
7. Reporting

# Overview
This project uses Cypress with JavaScript to perform an automated test of a WebSocket API. The test sends a request to retrieve a list of states and validates the response data. The test also uses a fixture (`states.json`) to provide the WebSocket URL, request data, and expected states for validation.

# Pre-requisites
Before setting up the project, ensure the following software is installed:

- Node.js (version 12 or higher)
- npm (version 6 or higher)
- Cypress (version 8 or higher)
- Visual Studio Code

# Installation 
1. Clone the repository:

   git clone https://github.com/155076X/Deriv.git

2. Navigate into the project directory: After cloning, move into the project folder using the terminal or command line:
  
   cd Deriv

3. Open the Project in Visual Studio Code: Once you're inside the project directory, open it in VS Code using the following command:

   code.

4. Install Dependencies (if not done yet), using the following command :
 
   npm install

# Running Tests
You can run the tests in two different modes:

1. Run the Tests from Visual Studio Code: You can open the integrated terminal in VS Code
Run Cypress tests using:

   npx cypress open

After that, you can select and run the test "websocket_states_list.cy.js"

2. Alternatively, to run tests in headless mode, use:

  npx cypress run --spec cypress/e2e/websocket_states_list.cy.js

# Test Structure
    Test File: The main test file is located in cypress/e2e/. The specific test file is "websocket_states_list.cy.js"
    Fixtures: The fixture file (states.json) can be found in the cypress/fixtures directory. This file provides WebSocket request data and the expected states for the test.

# Test Details
    1. Establishes a WebSocket connection using the URL from the "states.json" fixture.
    2. Send a request to retrieve the list of states.
    3. Validate the response, ensuring it contains the "states_list" property and specific states.
    4. Closes the WebSocket connection after validation.

# Reporting
The automation test report is generated using Mochawesome. After running the tests, you can view detailed reports in the cypress/reports directory.  

     cypress\reports\html\index.html

