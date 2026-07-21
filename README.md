# 🚗 KATA Car Dealership Inventory System

A full-stack Car Dealership Inventory Management System built as part of the KATA assessment. The application enables secure inventory management through JWT authentication and provides a modern React frontend with a RESTful Express API backed by MongoDB.

---

## 📌 Project Overview

The Car Dealership Inventory System is designed to help dealerships manage their vehicle inventory efficiently. It provides secure authentication for users and serves as the foundation for performing CRUD operations on vehicle records.

---

## ✨ Features

### Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based Authentication
- Protected API Routes

### Vehicle Inventory (In Progress)
- Add Vehicle
- View Vehicles
- Update Vehicle
- Delete Vehicle
- Vehicle Status Management

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Responsive UI

### Backend
- Express.js
- TypeScript
- MongoDB
- Mongoose ODM
- JWT Authentication
- RESTful API Architecture

---

# 🛠 Tech Stack

## Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hook Form
- Framer Motion
- Recharts

## Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

# 📂 Project Structure

```
Kata-car-dealership-inventory-system
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/Kata-car-dealership-inventory-system.git

cd Kata-car-dealership-inventory-system
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

Server:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Application:

```
http://localhost:5173
```

---

# 🔐 Authentication

## Register

```
POST /api/auth/register
```

Example Request

```json
{
    "name": "Admin",
    "email": "admin@test.com",
    "password": "123456",
    "role": "admin"
}
```

---

## Login

```
POST /api/auth/login
```

Example Request

```json
{
    "email": "admin@test.com",
    "password": "123456"
}
```

Returns

```json
{
    "success": true,
    "token": "<JWT_TOKEN>",
    "user": {
        "id": "...",
        "name": "Admin",
        "email": "admin@test.com",
        "role": "admin"
    }
}
```

---

## Protected Routes

Include the JWT token in every protected request:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Planned Vehicle APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/vehicles | Get All Vehicles |
| GET | /api/vehicles/:id | Get Vehicle |
| POST | /api/vehicles | Create Vehicle |
| PUT | /api/vehicles/:id | Update Vehicle |
| DELETE | /api/vehicles/:id | Delete Vehicle |

---

# 🗄 Database

MongoDB is used as the primary database.

Current User Model

```text
User
├── name
├── email
├── password (hashed)
├── role
├── createdAt
└── updatedAt
```

Upcoming Vehicle Model

```text
Vehicle
├── brand
├── model
├── year
├── price
├── mileage
├── fuelType
├── transmission
├── status
└── image
```

---

# 🤖 My AI Usage

Artificial Intelligence was used as a development aid throughout this project. AI was utilized to improve productivity and learning, while all implementation, testing, debugging, and integration decisions were reviewed and validated during development.

### AI-assisted tasks included:

- Designing the overall project architecture.
- Generating boilerplate code for Express.js, React, and TypeScript components.
- Assisting with MongoDB schema and Mongoose model creation.
- Implementing JWT-based authentication and route protection.
- Debugging TypeScript, Express, MongoDB, and dependency-related issues.
- Explaining unfamiliar concepts and recommending best practices.
- Generating API endpoint templates and example request/response payloads.
- Creating project documentation, including this README.
- Providing guidance on GitHub repository organization and project structure.

### Development Responsibility

All generated code was integrated, tested, modified, and validated as part of the development process. AI served as a programming assistant to accelerate development and improve code quality, while the final implementation and project decisions remained under the developer's control.

# 🚀 Future Enhancements

- Vehicle CRUD
- Vehicle Image Upload
- Dashboard Analytics
- Search & Filtering
- Pagination
- Role-Based Access Control
- Sales Management
- Customer Management
- Reports
- Docker Deployment

---

# 👨‍💻 Author

Heer Jambudiya

GitHub:
https://github.com/heerjambudiya

---

# 📄 License

This project is intended for educational purposes as part of the KATA assessment.
