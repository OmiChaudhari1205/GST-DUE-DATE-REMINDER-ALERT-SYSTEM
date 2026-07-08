# GST Due Date Reminder & Alert System

## Project Overview

The GST Due Date Reminder & Alert System is a backend application that helps users manage GST filing deadlines by storing GST filing details and sending timely reminders. The application provides secure authentication, profile management, and RESTful APIs for GST-related operations.

---

## Features

- User Registration
- User Login using JWT Authentication
- Secure Password Hashing
- GST Filing Profile Management
- CRUD Operations
- Input Validation
- Error Handling
- PostgreSQL Database
- Prisma ORM Integration
- REST API

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- dotenv

---

## Project Structure

```
project/
│
├── prisma/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move to the project folder

```bash
cd project-name
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Database Migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

---

## Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### GST Filing Profile

| Method | Endpoint |
|---------|----------|
| POST | /api/gst-profile |
| GET | /api/gst-profile |
| PUT | /api/gst-profile/:id |
| DELETE | /api/gst-profile/:id |

---

## Authentication

Protected APIs require a JWT token.

Example:

```
Authorization: Bearer YOUR_TOKEN
```

---

## Testing

Use the provided Postman Collection to test all APIs.

---

## Future Improvements

- Email Notifications
- SMS Alerts
- Dashboard
- Admin Panel
- GST Calendar
- Report Generation

---

## Author

Your Name
