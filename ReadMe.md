# **Backend – User Management API (Node.js + Express + MongoDB)**

The backend is built using **Node.js**, **Express**, and **MongoDB (Mongoose)** and provides basic **CRUD APIs** for managing users.

The main goal of this backend is to demonstrate understanding of:

- **REST APIs**
- **Backend architecture**
- **Database interaction using Mongoose**
- **Proper error handling and async flow**

---

## **Tech Stack Used**

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **cors**
- **nodemon**

---

## **How I Ran the Backend**

After **setting up the project** and **installing dependencies**, I ran the backend in **development mode** using:

npm run dev

This command starts the server using **nodemon**, which **automatically restarts the server** whenever **code changes** are made.

### On Successful Startup
- The server **listens on port `5050`**
- **MongoDB connects successfully** using the connection string from the **`.env` file**

---

**Project Structure**

backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── usercontrollers.js
│   ├── models/
│   │   └── usermodel.js
│   ├── routes/
│   │   └── userroutes.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   └── asyncHandler.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── ReadMe.md

---

## File-wise Explanation

### `server.js`
- Acts as the **entry point of the backend**
- Loads **environment variables** using **`dotenv`**
- Connects to **MongoDB** using **`connectDB()`**
- Starts the **Express server** on the **specified port**

This file is responsible **only for starting the application** and **does not define routes or business logic**.

---

### `app.js`
- Creates the **Express application**
- Configures **middleware**:
  - **`express.json()`** for parsing **request bodies**
  - **`cors()`** for handling **cross-origin requests**
- Registers **route handlers** under **`/api/users`**

This file defines **how requests are handled**, but **does not start the server**.

---

### `config/db.js`
- Handles **MongoDB connection** using **Mongoose**
- Uses the **MongoDB URI** from **environment variables**
- Implements **async/await** with **proper error handling**
- **Stops the server** if the **database connection fails**

---

### `models/usermodel.js`
- Defines the **User schema** using **Mongoose**


#### Fields
- **`name`**
- **`email`** (unique and **validated format**)
- **`phone_number`** (unique)

Uses **`timestamps: true`** to automatically add:
- **`createdAt`**
- **`updatedAt`**

This model is used to **interact with the `users` collection** in **MongoDB**.

---

### `routes/userroutes.js`
- Defines all **user-related routes**
- Uses **Express Router**
- Maps **HTTP methods and paths** to **controller functions**

#### Routes Implemented
- **POST** `/api/users/add`
- **GET** `/api/users`
- **GET** `/api/users/:id`
- **PUT** `/api/users/:id`
- **DELETE** `/api/users/:id`

---

### `controllers/usercontrollers.js`
- Contains all **business logic** for **user operations**
- Uses **`async/await`** for **database operations**
- Uses **`asyncHandler`** to avoid **repetitive try-catch blocks**
- Throws **custom errors** using **`ApiError`**

Each controller handles:
- **Input validation**
- **Database interaction**
- Sending **structured JSON responses**

---

### `utils/asyncHandler.js`
- Utility wrapper to handle **async errors**
- Automatically **forwards errors** to **Express error handling**
- Helps keep **controller code clean and readable**

---

### `utils/ApiError.js`
- **Custom error class**
- Used to throw **structured API errors** with **status codes** and **messages**
- Helps maintain **consistent error responses** across the application

---

## API Endpoints

### Add User
**POST** `/api/users/add`

{
  "name": "Aarav Sharma",
  "email": "aarav.sharma@gmail.com",
  "phone_number": "9876543210"
}

---

### Get All Users
**GET** `/api/users`

---

### Get User by ID
**GET** `/api/users/:id`

---

### Update User
**PUT** `/api/users/:id`

{
  "name": "Updated Name",
  "phone_number": "9123456789"
}
Only the provided fields are updated.

---

### Delete User
**DELETE** `/api/users/:id`

---

## Environment Variables Used
The backend uses **environment variables** for **sensitive configuration**:

- **`PORT=5050`**
- **`MONGO_URI=<MongoDB Atlas connection string>`**

The **`.env` file is not committed** to the repository.

---

## Error Handling Approach
- All **async controllers** are wrapped using **`asyncHandler`**
- **Custom errors** are thrown using **`ApiError`**
- **Proper HTTP status codes** are returned for:
  - **Validation errors**
  - **Resource not found**
  - **Server errors**
