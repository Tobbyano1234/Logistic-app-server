# Simple Blog API

# API Endpoints
This project is a RESTful API for a simple blog application.
This repository contains an implementation of API endpoints to connect with MongoDB Atlas using Express, MongoDB, Mongoose, and TypeScript.

## Technologies Used

- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing user data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **TypeScript:** A superset of JavaScript that adds static typing and other features.

## Getting Started
 The application allows users to create, read, update, and delete blog posts. Each blog post contains the following properties:

- **Title** (string)
- **Content** (string)
- **Author** (string)
- **Creation Date** (timestamp)

## Endpoints

### 1. Create a New Blog Post

- **HTTP Method:** POST
- **Endpoint:** `/api/posts`
- **Request Body:**

  ```json
  {
    "title": "Sample Blog Post",
    "content": "This is the content of the blog post.",
    "author": "John Doe"
  }
  ```

- **Response:**
  - **Status Code:** 201 (Created) if successful
  - **Response Body:** The created blog post object

### 2. Get a List of All Blog Posts

- **HTTP Method:** GET
- **Endpoint:** `/api/posts`
- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** An array of blog post objects

### 3. Get a Single Blog Post by ID

- **HTTP Method:** GET
- **Endpoint:** `/api/posts/:postId`
- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** The requested blog post object
  - **Status Code:** 404 (Not Found) if the specified post ID does not exist

### 4. Update an Existing Blog Post

- **HTTP Method:** PUT
- **Endpoint:** `/api/posts/:postId`
- **Request Body:**

  ```json
  {
    "title": "Updated Blog Post Title",
    "content": "This is the updated content of the blog post."
  }
  ```

- **Response:**
  - **Status Code:** 200 (OK) if successful
  - **Response Body:** The updated blog post object
  - **Status Code:** 404 (Not Found) if the specified post ID does not exist

### 5. Delete a Blog Post by ID

- **HTTP Method:** DELETE
- **Endpoint:** `/api/posts/:postId`
- **Response:**
  - **Status Code:** 204 (No Content) if successful (no response body)
  - **Status Code:** 404 (Not Found) if the specified post ID does not exist

## Error Handling

For all endpoints, appropriate error messages are returned with relevant status codes in case of any errors. For instance:

- **Status Code:** 404 (Not Found) if the specified post ID does not exist.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tobbyano1234/garage-mobility-web-services.git
   ```

2. Navigate to the project directory:
   ```bash
   cd simple-blog-api
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

- Ensure MongoDB Atlas connection details are correctly configured in the `garage-mobility-web-api/config/database/index.ts` file.

## Usage

Once the server is running, you can use tools like `curl`, Postman to interact with the API endpoints as described above.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines first.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!