const http = require("http");
 
const server =  http.createServer(function(request, response){
    response.end(`{
        "orders": [
            {
                "id": "123457890",
                "partner_id": "123",
                "payment_type": "Оплата при отриманні замовлення",
                "payment_type_id": "0",
                "created_date": "2024-03-01 22:13:02",
                "updated_date": "2024-03-01 15:04:55",
                "accepted_at": "2024-03-01 22:13:07",
                "products": [
                    {
                        "sku": "123456-0123",
                        "name": "Назва товару",
                        "category_id": "123",
                        "quantity": 1,
                        "price": 2880,
                        "amount": 2880,
                        "brand_id": "999"
                    }
                ],
                "customer": {
                    "firstname": "Ім'я",
                    "telephone": "+38012345678",
                    "lastname": "Прізвище"
                },
                "status": {
                    "status": 1
                },
                "shipping": {
                    "type": "Нова пошта",
                    "shipping_id": "4",
                    "city": "Місто",
                    "region_name": "Область",
                    "price": "По тарифам перевізника",
                    "tracking_number": null,
                    "stock": {
                        "name": "Склад №1",
                        "stock_number": "NP1"
                    }
                }
            }
        ],
        "total_records": 1
    }`);
});

server.listen(5000);
