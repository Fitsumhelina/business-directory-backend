# Business Directory Backend

This project is a backend application for a business directory platform, built using Node.js, Express, and PostgreSQL. The application allows business owners to register their businesses, regular users to search and rate businesses, and admins to manage the platform. The backend features JWT authentication, comprehensive role-based access control, and integration with PostgreSQL for data persistence.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Database Migrations](#database-migrations)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Business Directory Backend provides a robust and scalable platform for managing business information and user interactions. It includes features for user authentication, business registration, ratings, comments, and role-based access control.

### Features

- **User Authentication**: Secure user authentication using JWT.
- **Role-Based Access Control**: Different roles for admins, business owners, and regular users.
- **Business Management**: Business owners can register and manage their businesses.
- **User Interactions**: Users can rate, comment on, and favorite businesses.
- **Admin Controls**: Admins can manage users and businesses, including approving or deleting businesses.
- **Database Integration**: Uses PostgreSQL for data storage.
- **RESTful API**: Clean and well-documented API for frontend integration.

## Folder Structure

```plaintext
business-directory-backend/
│
├── src/
│   ├── config/                 # Configuration files
│   │   ├── db.js
│   │   └── jwt.js
│   │
│   ├── controllers/            # Controllers for handling requests
│   │   ├── authController.js
│   │   ├── businessController.js
│   │   ├── userController.js
│   │   ├── ratingController.js
│   │   ├── commentController.js
│   │   ├── favoriteController.js
│   │   ├── tagController.js
│   │   ├── photoController.js
│   │   ├── roleController.js
│   │   ├── permissionController.js
│   │   └── adminController.js
│   │
│   ├── middlewares/            # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   │
│   ├── models/                 # Database models
│   │   ├── index.js
│   │   ├── user.js
│   │   ├── business.js
│   │   ├── rating.js
│   │   ├── comment.js
│   │   ├── favorite.js
│   │   ├── tag.js
│   │   ├── photo.js
│   │   ├── role.js
│   │   ├── permission.js
│   │   ├── rolePermission.js
│   │   ├── auditLog.js
│   │   ├── passwordResetToken.js
│   │   ├── twoFactorAuth.js
│   │
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js
│   │   ├── businessRoutes.js
│   │   ├── userRoutes.js
│   │   ├── ratingRoutes.js
│   │   ├── commentRoutes.js
│   │   ├── favoriteRoutes.js
│   │   ├── tagRoutes.js
│   │   ├── photoRoutes.js
│   │   ├── roleRoutes.js
│   │   ├── permissionRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── services/               # Business logic
│   │   ├── authService.js
│   │   ├── businessService.js
│   │   ├── userService.js
│   │   ├── ratingService.js
│   │   ├── commentService.js
│   │   ├── favoriteService.js
│   │   ├── tagService.js
│   │   ├── photoService.js
│   │   ├── roleService.js
│   │   ├── permissionService.js
│   │   ├── adminService.js
│   │   └── emailService.js
│   │
│   ├── utils/                  # Utility functions
│   │   ├── helpers.js
│   │   └── logger.js
│   │
│   ├── migrations/             # Database migration files
│   │   ├── 20240802221401_create_users_table.js
│   │   ├── 20240802221644_create_businesses_table.js
│   │   ├── 20240802221934_create_roles_table.js
│   │   ├── 20240802222004_create_tags_table.js
│   │   ├── 20240802222227_create_favorites_table.js
│   │   ├── 20240802222308_create_comments_table.js
│   │   ├── 20240802222336_create_ratings_table.js
│   │   ├── 20240802222413_create_role_permissions_table.js
│   │   ├── 20240802222447_create_business_photos_table.js
│   │   ├── 20240802222919_create_permissions_table.js
│   │
│   ├── app.js                  # Express app setup
│   └── server.js               # Entry point of the application
│
├── .env                        # Environment variables
├── package.json                # NPM dependencies and scripts
└── README.md                   # Project documentation


## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/business-directory-backend.git
    cd business-directory-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:
   - Create a `.env` file in the root directory and add the necessary environment variables:

    ```env
    DATABASE_URL=postgres://user:password@localhost:5432/business_directory_1
    JWT_SECRET=your_jwt_secret
    ```

4. Run database migrations:

    ```bash
    npx knex migrate:latest
    ```

5. Start the server:

    ```bash
    npm start
    ```

### Database Migrations

Database migrations are handled using Knex.js. To manage migrations, use the following commands:

- Run the latest migrations:

    ```bash
    npx knex migrate:latest
    ```

- Rollback the last batch of migrations:

    ```bash
    npx knex migrate:rollback
    ```

- Create a new migration file:

    ```bash
    npx knex migrate:make migration_name
    ```

### API Documentation

The API follows RESTful principles. Below are the primary endpoints available:

#### Authentication

- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`

#### Businesses

- Get All Businesses: `GET /api/businesses`
- Create a Business: `POST /api/businesses`
- Get a Business by ID: `GET /api/businesses/:id`
- Update a Business: `PUT /api/businesses/:id`
- Delete a Business: `DELETE /api/businesses/:id`

#### Users

- Get All Users: `GET /api/users`
- Get User by ID: `GET /api/users/:id`
- Update a User: `PUT /api/users/:id`
- Delete a User: `DELETE /api/users/:id`

#### Ratings

- Create a Rating: `POST /api/ratings`
- Get Ratings by Business ID: `GET /api/ratings/:businessId`

#### Comments

- Create a Comment: `POST /api/comments`
- Get Comments by Business ID: `GET /api/comments/:businessId`

#### Favorites

- Add to Favorites: `POST /api/favorites`
- Get Favorites by User ID: `GET /api/favorites/:userId`

#### Tags

- Get All Tags: `GET /api/tags`
- Create a Tag: `POST /api/tags`

#### Photos

- Upload a Photo: `POST /api/photos`
- Get Photos by Business ID: `GET /api/photos/:businessId`

#### Roles and Permissions

- Get All Roles: `GET /api/roles`
- Create a Role: `POST /api/roles`
- Get All Permissions: `GET /api/permissions`
- Create a Permission: `POST /api/permissions`


#### Contributors

- [Fitsumhelina](https://github.com/Fitsumhelina)
- [Yabe12](https://github.com/Yabe12)
