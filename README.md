# User Management REST API

*Author:* Manoj Reddy
*Project:* DecodeLabs Full Stack Industrial Training — Project 2 | Batch 2026

---

## Project Overview

A production-quality backend REST API built with Node.js, Express, and MongoDB that handles complete User Management with proper validation, error handling, and RESTful architecture.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM (Object Data Modeling) |
| express-validator | Input validation |
| dotenv | Environment variables |
| cors | Cross-origin resource sharing |
| nodemon | Development auto-restart |

---

## Project Structure

\\\`
user-management-api/
├── server.js                  # Entry point
├── package.json               # Dependencies and scripts
├── .env                       # Environment variables
├── config/
│   └── db.js                  # MongoDB connection
├── models/
│   └── User.js                # Mongoose User schema
├── controllers/
│   └── userController.js      # CRUD business logic
├── routes/
│   └── userRoutes.js          # API route definitions
└── middleware/
    ├── validate.js            # Input validation middleware
    └── errorHandler.js        # Global error handler
\\\`

---

## Setup and Installation

### Prerequisites
- Node.js v18 or higher
- MongoDB installed and running locally

### Steps

\\\`bash
# Step 1 - Navigate to project folder
cd user-management-api

# Step 2 - Install all dependencies
npm install

# Step 3 - Create .env file in root folder
PORT=8000
MONGO_URI=mongodb://localhost:27017/userManagementDB
NODE_ENV=development

# Step 4 - Start MongoDB (in a separate terminal)
mongod

# Step 5 - Start the server
npm run dev
\\\`

### Success Output
\\\`
Server running on http://localhost:8000
Environment: development
MongoDB Connected: localhost
\\\`

---

## API Endpoints

### Base URL: http://localhost:8000/api

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| GET | /users/:id | Get user by ID |
| POST | /users | Create new user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

---

## Request and Response Examples

### POST /api/users — Create User

*Request Body:*
\\\`json
{
  "name": "Manoj Reddy",
  "email": "manoj@example.com",
  "age": 22,
  "role": "user"
}
\\\`

*Success Response (201):*
\\\`json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "name": "Manoj Reddy",
    "email": "manoj@example.com",
    "age": 22,
    "role": "user",
    "isActive": true,
    "createdAt": "2026-01-15T10:30:00.000Z"
  }
}
\\\`

### GET /api/users — Get All Users

*Success Response (200):*
\\\`json
{
  "success": true,
  "count": 1,
  "total": 1,
  "page": 1,
  "totalPages": 1,
  "data": [ ...users ]
}
\\\`

### Error Response (404):
\\\`json
{
  "success": false,
  "message": "User not found"
}
\\\`

### Validation Error (400):
\\\`json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
\\\`

---

## HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Validation failed |
| 404 | Not Found | User does not exist |
| 409 | Conflict | Email already exists |
| 500 | Internal Server Error | Unexpected server error |

---

## Data Model

\\\`
User {
  name       String    required, 2-50 chars
  email      String    required, unique, valid email
  age        Number    optional, 1-120
  role       String    enum: user/admin/moderator, default: user
  isActive   Boolean   default: true
  createdAt  Date      auto-generated
  updatedAt  Date      auto-generated
}
\\\`

---

## Validation

| Type | Description |
|------|-------------|
| Syntactic | Checks format — email pattern, name length, age range |
| Semantic | Checks logic — email uniqueness before create and update |

---

## Key Skills Demonstrated

- Backend development with Node.js and Express
- RESTful API design and naming conventions
- MongoDB schema design with Mongoose
- Two-layer input validation
- Proper HTTP status codes
- Global error handling middleware
- MVC architecture pattern
- Environment variable management

---

Build with Integrity. Validate Everything. Communicate Clearly. Respect the Architecture.

*Author: Manoj Reddy | DecodeLabs Batch 2026*
