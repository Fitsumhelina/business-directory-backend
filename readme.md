# Business Directory Backend

This project is a backend application for a business directory platform, built using Node.js, Express, and PostgreSQL. The application allows business owners to register their businesses, regular users to search and rate businesses, and admins to manage the platform. The backend features JWT authentication, comprehensive role-based access control, and integration with PostgreSQL for data persistence.

## Table of Contents

- [Project Overview](#project-overview)
- [User Types and Roles](#user-types-and-roles)
  - [Random Users](#random-users)
  - [Business Owners](#business-owners)
  - [Admins](#admins)
- [How the Project Works](#how-the-project-works)
  - [User Authentication and Authorization](#user-authentication-and-authorization)
  - [Business Registration and Management](#business-registration-and-management)
  - [User Interaction](#user-interaction)
  - [Role-Based Features](#role-based-features)
  - [Database and Migrations](#database-and-migrations)
- [API Documentation](#api-documentation)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Database Migrations](#database-migrations)
- [Contributing](#contributing)
  - [Contributors](#contributors)
- [Folder Structure](#folder-structure)
- [License](#license)

## Project Overview

The Business Directory Backend is a comprehensive platform designed to manage business information and facilitate user interactions. It offers a range of features for business registration, user authentication, ratings, comments, and role-based access control. The project is built using Node.js, Express, and PostgreSQL, with a focus on scalability and robust functionality.

## User Types and Roles

### Random Users

- **Role:** Regular users of the platform who interact with business listings.
- **Capabilities:**
  - **Rate Businesses:** Users can provide ratings for businesses they interact with.
  - **Comment on Businesses:** Users can leave comments and feedback on business profiles.
  - **Save Favorite Businesses:** Users can mark businesses as favorites for easy access.
  - **View Business Listings:** Users can browse and search for businesses based on various criteria.

### Business Owners

- **Role:** Users who manage and update information about their businesses.
- **Capabilities:**
  - **Register a Business:** Business owners can register their businesses on the platform.
  - **Update Business Information:** Owners can edit details such as business name, description, category, tags, logo, hours of operation, address, and contact information.
  - **Upload Business Photos:** Owners can upload images related to their business.
  - **View Business Analytics:** Owners can access insights and analytics related to their business performance.

### Admins

- **Role:** Administrators who manage the platform and oversee business listings.
- **Capabilities:**
  - **Approve/Reject Business Registrations:** Admins review and approve new business registrations.
  - **Delete Businesses:** Admins can delete business listings if necessary (e.g., if a business closes or violates policies).
  - **Manage Users and Roles:** Admins have the authority to manage user roles and permissions across the platform.

## How the Project Works

### User Authentication and Authorization

- **Registration and Login:** Users can register and log in using JWT (JSON Web Tokens) for secure authentication.
- **Role-Based Access Control:** The system employs role-based access control to ensure that users have appropriate permissions based on their roles (e.g., random users, business owners, admins).

### Business Registration and Management

- **Business Listing:** Business owners can submit their business details, which are reviewed and approved by admins before becoming publicly available.
- **Business Updates:** Owners can update their business information and upload photos. Changes are reflected on their business profile.

### User Interaction

- **Rating and Comments:** Users can rate businesses and leave comments. Ratings and comments are stored in the database and associated with the relevant business.
- **Favorites:** Users can save businesses as favorites, which allows them to quickly access their preferred businesses.

### Role-Based Features

- **Admins:** Admins manage the entire system, including user accounts, business listings, and platform settings.
- **Business Owners:** Owners have control over their business profiles but limited access to other parts of the platform.
- **Random Users:** Users interact with the platform by searching for businesses, providing feedback, and saving favorites.

### Database and Migrations

- **PostgreSQL Database:** The project uses PostgreSQL to store user data, business information, ratings, comments, and more.
- **Knex Migrations:** Knex.js is used for managing database schema changes through migration files. Migrations help in evolving the database schema without losing data.

## API Documentation

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

## Database Migrations

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


### Contributors

- [Fitsumhelina](https://github.com/Fitsumhelina)
- [Yabe12](https://github.com/Yabe12)

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
│   │   └── admin.js
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
│   │   └── adminService.js
│   │
│   ├── utils/                  # Utility functions
│   │   ├── logger.js
│   │   └── validator.js
│   │
│   ├── .env                    # Environment variables
│   ├── .gitignore               # Git ignore file
│   ├── knexfile.js              # Knex configuration
│   ├── package.json             # NPM package file
│   ├── server.js               # Entry point of the application
│   └── README.md               # Project documentation
│
└── migrations/                 # Database migrations
    ├── 20240802123456_create_users_table.js
    ├── 20240802123457_create_businesses_table.js
    ├── 20240802123458_create_ratings_table.js
    ├── 20240802123459_create_comments_table.js
    ├── 20240802123460_create_favorites_table.js
    ├── 20240802123461_create_tags_table.js
    ├── 20240802123462_create_photos_table.js
    ├── 20240802123463_create_roles_table.js
    ├── 20240802123464_create_permissions_table.js
    └── 20240802123465_create_admins_table.js
