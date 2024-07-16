# Logistic Service API

# API Endpoints
This project is a RESTful API for a logistic service application.
This repository contains an implementation of API endpoints to connect with MongoDB Atlas using Express, MongoDB, Mongoose, and TypeScript.

## Technologies Used

- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing user data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **TypeScript:** A superset of JavaScript that adds static typing and other features.

## Getting Started
 The application allows users to create, read, update, and delete shipments. Each shipments contains the following properties:

- **Name** (string)
- **Origin** (string)
- **Destination** (string)
- **Origin** (string)
- **Tracking Number** (string)
- **Creation At** (timestamp)
- **Updated At** (timestamp)

## Endpoints

### 1. Create a New Shipment

- **HTTP Method:** POST
- **Endpoint:** `/api/v1/shipments`
- **Request Body:**

  ```json
  {
      "name": "Shipment Name",
      "origin": "Origin",
      "destination": "Destination"
  }
  ```

- **Response:**
  - **Status Code:** 201 (Created) if successful
  - **Response Body:** The created shipment object

  ```json
    {
      "status": "success",
      "message": "Shipment created successfully",
      "data": {
          "_id": "640999999999999999999999",
          "name": "Shipment Name",
          "origin": "Origin",
          "destination": "Destination",
          "trackingNo": "ABC12345678",
          "status": "pending",
          "createdAt": "2022-01-01T00:00:00.000Z",
          "updatedAt": "2022-01-01T00:00:00.000Z"
      }
  }
  ```

### 2. Get a List of All Shipments

- **HTTP Method:** GET
- **Endpoint:** `/api/v1/shipments`
- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** An array of shipment objects

    ```json
    {
      "status": "success",
      "message": "Shipments fetched successfully",
      "data": [
          {
              "_id": "640999999999999999999999",
              "name": "Shipment Name",
              "origin": "Origin",
              "destination": "Destination",
              "trackingNo": "ABC12345678",
              "status": "pending",
              "createdAt": "2022-01-01T00:00:00.000Z",
              "updatedAt": "2022-01-01T00:00:00.000Z"
          },
          {
              "_id": "640999999999999999999998",
              "name": "Another Shipment",
              "origin": "Origin 2",
              "destination": "Destination 2",
              "trackingNo": "XYZ98765432",
              "status": "in_transit",
              "createdAt": "2022-01-02T00:00:00.000Z",
              "updatedAt": "2022-01-02T00:00:00.000Z"
          }
      ]
  }
    ```


### 3. Get a Single Shipment by ID

- **HTTP Method:** GET
- **Endpoint:** `/api/shipments/:shipmentID`
- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** The requested shipment object
  - **Status Code:** 404 (Not Found) if the specified shipment ID does not exist

### 4. Update an Existing Shipment

- **HTTP Method:** PUT
- **Endpoint:** `/api/v1/shipments/:shipmentID`
- **Request Body:**

  ```json
  {
    "name": "Updated Shipment Name",
    "origin": "Origin",
    "destination": "Destination",
    "trackingNo": "ABC12345678",
    "status": "delivered",
  }
  ```

- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** The updated shipment object
  - **Status Code:** 404 (Not Found) if the specified shipment ID does not exist

### 5. Delete a Shipment by ID

- **HTTP Method:** DELETE
- **Endpoint:** `/api/v1/shipments/:shipmentID`
- **Response:**
  - **Status Code:** 204 (No Content) if successful (no response body)
  - **Status Code:** 404 (Not Found) if the specified shipment ID does not exist

## Error Handling

For all endpoints, appropriate error messages are returned with relevant status codes in case of any errors. For instance:

- **Status Code:** 404 (Not Found) if the specified shipment ID does not exist.

- **Pagination:**
The API supports pagination for the GET /api/v1/shipments endpoint. The client can specify the page number and the number of items per page in the query parameters.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tobbyano1234/Logistic-app-server.git
   ```

2. Navigate to the project directory:
   ```bash
   cd logistic-app-server
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

4. Start the server:
   ```bash
   yarn start
   ```

## Additional Notes

- Ensure MongoDB Atlas connection details are correctly configured in the `web-api/config/database/index.ts` file.

## Usage

Once the server is running, you can use tools like `curl`, Postman to interact with the API endpoints as described above.

Also find the postman documentation on https://logistic-app-server.onrender.com/api/v1/docs or https://documenter.getpostman.com/view/21657944/2sA3kPpjMi

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines first.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!