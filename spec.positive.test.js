test('Test orders - Positive Scenarios', async () => {
  const response = await fetch('http://localhost:5000', {
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

  const result = await response.json();

  // Test HTTP status code
  expect(response.status).toBe(200);

  // Test response
  expect(result).toHaveProperty('orders');
  expect(result.orders).toHaveLength(1);
  const order = result.orders[0];
  expect(order).toHaveProperty('id', '123457890');
  expect(order).toHaveProperty('partner_id', '123');
  expect(order).toHaveProperty('payment_type', 'Оплата при отриманні замовлення');
  expect(order).toHaveProperty('payment_type_id', '0');
  expect(order).toHaveProperty('created_date', '2024-03-01 22:13:02');
  expect(order).toHaveProperty('updated_date', '2024-03-01 15:04:55');
  expect(order).toHaveProperty('accepted_at', '2024-03-01 22:13:07');

  // Test products
  expect(order).toHaveProperty('products');
  expect(order.products).toHaveLength(1);
  const product = order.products[0];
  expect(product).toHaveProperty('sku', '123456-0123');
  expect(product).toHaveProperty('name', 'Назва товару');
  expect(product).toHaveProperty('category_id', '123');
  expect(product).toHaveProperty('quantity', 1);
  expect(product).toHaveProperty('price', 2880);
  expect(product).toHaveProperty('amount', 2880);
  expect(product).toHaveProperty('brand_id', '999');

  // Test customer
  expect(order).toHaveProperty('customer');
  const customer = order.customer;
  expect(customer).toHaveProperty('firstname', 'Ім\'я');
  expect(customer).toHaveProperty('telephone', '+38012345678');
  expect(customer).toHaveProperty('lastname', 'Прізвище');

  // Test status
  expect(order).toHaveProperty('status');
  expect(order.status).toHaveProperty('status', 1);

  // Test shipping
  expect(order).toHaveProperty('shipping');
  const shipping = order.shipping;
  expect(shipping).toHaveProperty('type', 'Нова пошта');
  expect(shipping).toHaveProperty('shipping_id', '4');
  expect(shipping).toHaveProperty('city', 'Місто');
  expect(shipping).toHaveProperty('region_name', 'Область');
  expect(shipping).toHaveProperty('price', 'По тарифам перевізника');
  expect(shipping).toHaveProperty('tracking_number', null);

  // Test stock
  expect(shipping).toHaveProperty('stock');
  const stock = order.shipping.stock;
  expect(stock).toHaveProperty('name', 'Склад №1');
  expect(stock).toHaveProperty('stock_number', 'NP1');

  // Test records
  expect(result).toHaveProperty('total_records', 1);
});
