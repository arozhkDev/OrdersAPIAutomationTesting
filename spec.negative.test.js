test('Simulate network error', async () => {
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
  });
  
  test('Simulate server error', async () => {
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
  });
  
  test('Simulate incorrect request payload', async () => {
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
  