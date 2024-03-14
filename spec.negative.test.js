test('Test orders - Negative Scenarios', async () => {
    // Test case: Simulate network error
    let networkError = false;
    try {
      await fetch('http://localhost:5000/nonexistent-route', {
        method: 'POST',
        body: JSON.stringify({
          "method": "call",
          "params": {
            "apiPath": "orders.orderList",
            "args": {
              "order_id": "123457890"
            }
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      networkError = true;
    }
    expect(networkError).toBe(true);
  
    // Test case: Simulate server error
    const responseServerError = await fetch('http://localhost:5000/server-error', {
      method: 'POST',
      body: JSON.stringify({
        "method": "call",
        "params": {
          "apiPath": "orders.orderList",
          "args": {
            "order_id": "123457890"
          }
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    expect(responseServerError.status).not.toBe(200);
  
    // Test case: Simulate incorrect request payload
    const responseIncorrectPayload = await fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify({
        "invalid_key": "invalid_value"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    expect(responseIncorrectPayload.status).not.toBe(200);
  });
  