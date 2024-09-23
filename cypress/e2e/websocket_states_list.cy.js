/// <reference types="cypress" />

describe('WebSocket API Test for States List', () => {
    // This test verifies the WebSocket connection, sends a request to fetch a list of states, and validates the response.

    it('should establish a WebSocket connection, send a request, and validate the response data', (done) => {

        // Load fixture data
        cy.fixture('states').then((data) => {

            // Use the WebSocket URL from the fixture
            const statesListWebSocketUrl = data.webSocketUrl;

            // Open a WebSocket connection using the browser's native WebSocket
            const statesWebSocket = new WebSocket(statesListWebSocketUrl);

            //When the WebSocket connection is established, send the request
            statesWebSocket.onopen = () => {
                // Send the 'states_list' request using data from the fixture
                statesWebSocket.send(JSON.stringify(data.requestData));
            };

            // Receive the response
            statesWebSocket.onmessage = (event) => {
                // Parse the received message data
                const response = JSON.parse(event.data);

                try {
                    // Check if the response contains the 'states_list' property
                    expect(response).to.have.property('states_list');

                    //  Verify that 'states_list' is an array
                    expect(response.states_list).to.be.an('array');

                    // Ensure the array is not empty
                    expect(response.states_list.length).to.be.greaterThan(0);

                    // Validate that specific states exist in the response using data from the fixture
                    data.expectedStates.forEach((expectedState) => {
                        const stateExists = response.states_list.some(state =>
                            state.text === expectedState.text && state.value === expectedState.value
                        );
                        expect(stateExists, `State ${expectedState.text} should exist`).to.be.true;
                    });

                } catch (error) {
                    // Log the error for Mochawesome reporting
                    assert.fail(`Validation failed: ${error.message}`);
                } finally {
                    // Close the WebSocket connection
                    statesWebSocket.close();
                    done(); // Notify Cypress that the test is done
                }
            };

            // Handle errors
            statesWebSocket.onerror = (error) => {
                // Log the error for Mochawesome reporting
                assert.fail(`WebSocket error: ${error.message}`);
                done(error); // Notify Cypress of the error
            };
        });
    });
});
