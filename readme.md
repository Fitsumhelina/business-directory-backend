# Business Directory

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Setup](#setup)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Migrations and Seed Data](#run-migrations-and-seed-data-if-applicable)
   - [Starting the Server](#starting-the-server)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Overview

The Business Directory is a web application built with Node.js, Express, and PostgreSQL. It allows users to browse businesses, rate them, save their favorites, and more. The application includes features for business owners to manage their business listings and for admins to oversee the platform.

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Business Listings**: Businesses can be added, updated, and verified.
- **Ratings and Reviews**: Users can rate and leave comments on businesses.
- **Favorites**: Users can save their favorite businesses.
- **Business Photos**: Business owners can upload photos.
- **Role-Based Access**: Different user roles with specific permissions.
- **Two-Factor Authentication**: Optional 2FA for added security.

## Technologies

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: Sequelize
- **Logging**: Winston
- **Error Handling**: Custom middleware

## Setup

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/business-directory.git
    cd business-directory
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    Copy the example environment file and update the values.

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your PostgreSQL credentials and JWT secret:

    ```env
    PORT=3000
    DATABASE_URL=postgres://username:password@localhost:5432/business_directory
    JWT_SECRET=your_jwt_secret
    ```

### Running Migrations and Seed Data (if applicable)

    ```bash
    npm run migrate
    npm run seed
    ```

### Starting the Server

    ```bash
    npm start
    ```

## Usage

- **Register a new user:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`
- **Get businesses:** `GET /api/businesses`
- **Rate a business:** `POST /api/businesses/:id/rate`
- **Save a favorite business:** `POST /api/favorites`

## Folder Structure

Here is an overview of the project folder structure:

- **`config/`**: Configuration files.
  - `config.js`: Database and app configuration settings.
  - `index.js`: Initializes and exports database connection and models.

- **`controllers/`**: Controllers for handling requests.
  - `authController.js`: Handles authentication-related requests.
  - `userController.js`: Manages user-related requests.
  - `businessController.js`: Manages business-related requests.
  - `...`: Other controllers as needed.

- **`middleware/`**: Middleware functions for authentication, error handling, etc.
  - `authMiddleware.js`: Middleware for verifying JWT and user roles.
  - `errorMiddleware.js`: Middleware for handling errors.
  - `...`: Other middleware as needed.

- **`models/`**: Sequelize models for database tables.
  - `User.js`: User model.
  - `Business.js`: Business model.
  - `Tag.js`: Tag model.
  - `BusinessTag.js`: Relationship between businesses and tags.
  - `Rating.js`: Ratings model.
  - `Favorite.js`: Favorites model.
  - `BusinessPhoto.js`: Business photos model.
  - `Role.js`: Role model.
  - `UserRole.js`: User roles model.
  - `Permission.js`: Permissions model.
  - `RolePermission.js`: Role permissions model.
  - `AuditLog.js`: Audit logs model.
  - `index.js`: Initializes and exports all models.

- **`routes/`**: API routes.
  - `authRoutes.js`: Routes for authentication.
  - `userRoutes.js`: Routes for user management.
  - `businessRoutes.js`: Routes for business operations.
  - `...`: Other routes as needed.

- **`utils/`**: Utility functions and helpers.
  - `db.js`: Database connection utility.
  - `errorHandler.js`: Custom error handling functions.
  - `logger.js`: Logging functions.
  - `tokenUtil.js`: Functions for handling JWT tokens.

- **`.env`**: Environment variables.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Project metadata and dependencies.
- **`package-lock.json`**: Lockfile for dependencies.
- **`server.js`**: Main entry point for the application.

## Contributing

Feel free to open issues or submit pull requests. Please follow the code style and include tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, reach out to [your-email@example.com](mailto:your-email@example.com).
