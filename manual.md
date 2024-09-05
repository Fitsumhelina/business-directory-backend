# API Manual for Business Directory Project

## Overview
This manual provides detailed information about the API endpoints available in the Business Directory application. It includes descriptions, required fields, and example requests for both backend and frontend developers.

---

## User Management APIs

### 1. **User Registration**
- **Endpoint**: `/api/users/register`
- **Method**: `POST`
- **Purpose**: Register a new user.

#### Required Fields
| Field      | Description                          |
|------------|--------------------------------------|
| `username` | The unique username for the user.    |
| `email`    | The user's email address.            |
| `password` | The user's password.                 |
| `firstname`| The user's first name.               |
| `lastname` | The user's last name.                |

#### Example Request
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "firstname": "John",
  "lastname": "Doe"
}
```
### 2. User Login

- **Endpoint**: `/api/users/login`
- **Method**: `POST`
- **Purpose**: Log in an existing user.

#### Required Fields

| Field    | Description                  |
|----------|------------------------------|
| `email`  | The user's email address.    |
| `password` | The user's password.       |

#### Example Request

```json
POST /api/users/login
Content-Type: application/json

{
  "email": "testuser@example.com",
  "password": "Password@123"
}

```
### 3. Get User Profile

- **Endpoint**: `/api/users/profile`
- **Method**: `GET`
- **Purpose**: Retrieve the current user's profile.

#### Usage

- **Authentication**: Requires an authentication token.

#### Example Request

```http
GET /api/users/profile
Authorization: Bearer YOUR_AUTH_TOKEN
```
### 4. Update User Profile

- **Endpoint**: `/api/users/profile`
- **Method**: `PUT`
- **Purpose**: Update the user's profile information.
- **Authentication**: Requires an authentication token.
- **Required Fields**:
firstname: The updated first name.
lastname: The updated last name.
email: The updated email address.
#### Example Request

```json
PUT /api/users/profile
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "firstname": "Updated",
  "lastname": "User",
  "email": "updateduser@example.com"
}

```
### 5. Delete User Profile

- **Endpoint**: `/api/users/profile`
- **Method**: `DELETE`
- **Purpose**: Delete the current user's profile.

#### Usage

- **Authentication**: Requires an authentication token.

#### Example Request

```http
DELETE /api/users/profile
Authorization: Bearer YOUR_AUTH_TOKEN
```
## Business Directory APIs

### 1. Register Business

- **Endpoint**: `/api/businesses/register`
- **Method**: `POST`
- **Purpose**: Register a new business.

#### Required Fields

| Field             | Description                                      |
|-------------------|--------------------------------------------------|
| `businessName`    | The name of the business.                       |
| `businessEmail`   | The business owner email address this help as to find the owner .                   |
| `categoryId`      | The ID of the category to which the business belongs. |
| `businessAddress` | The physical address of the business.           |
| `businessPhone`   | The contact phone number for the business.      |
| `websiteUrl`      | The business's website URL.                     |
| `latitude`        | The latitude coordinate of the business location.|
| `longitude`       | The longitude coordinate of the business location.|

#### Example Request

```json
POST /api/businesses/register
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "businessName": "Test Business",
  "categoryId": "CATEGORY_ID_HERE",
  "businessEmail": "business@example.com",
  "businessAddress": "123 Business St",
  "businessPhone": "123-456-7890",
  "websiteUrl": "http://example.com",
  "latitude": 40.7128,
  "longitude": -74.0060
}

```


### 2. Get All Businesses

- **Endpoint**: `/api/businesses`
- **Method**: `GET`
- **Purpose**: Retrieve a list of all registered businesses.

#### Example Request

```http
GET /api/businesses
```
### 3. Get Business by ID

- **Endpoint**: `/api/businesses/{BUSINESS_ID}`
- **Method**: `GET`
- **Purpose**: Retrieve details of a specific business by its ID.

#### Example Request

```http
GET /api/businesses/123
```
### 4. Update Business

- **Endpoint**: `/api/businesses/business/{BUSINESS_ID}`
- **Method**: `PUT`
- **Purpose**: Update the details of an existing business.
- **Required Fields**:
  - *businessName*: The updated name of the business.
  - *businessEmail*: The updated email address.
  - *businessAddress*: The updated address.
  - *businessPhone*: The updated phone number.

#### Example Request

```json
PUT /api/businesses/123
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "businessName": "Updated Business Name",
  "businessEmail": "updated@example.com",
  "businessAddress": "456 New Address",
  "businessPhone": "987-654-3210"
}

```
### 5. Delete Business

- **Endpoint**: `/api/businesses/business/{BUSINESS_ID}`
- **Method**: `DELETE`
- **Purpose**: Delete a specific business by its ID.
- **Authentication**: Requires an authentication token.
#### Example Request

```http
DELETE /api/businesses/123
Authorization: Bearer YOUR_JWT_TOKEN

```
### 6. Get Businesses by Category ID

- **Endpoint**: `/api/businesses/businesses/category/{CATEGORY_ID}`
- **Method**: `GET`
- **Purpose**: Retrieve businesses belonging to a specific category.

#### Example Request

```http
GET /api/businesses/businesses/category/1
```
### 7. Get Businesses by Search Criteria

- **Endpoint**: `/api/businesses/search`
- **Method**: `GET`
- **Purpose**: Search for businesses based on various criteria (e.g., name, location).

#### Example Request

```http
GET /api/businesses/businesses/search?name=Test Busiyu&address=123 Business St
```

### 8,Get Category Name by Category ID

- **Endpoint**: `http://localhost:5000/api/businesses/categories/{CATEGORY_ID}`
- **Method**: `GET`
- **Purpose**: Retrieve the name of a category by its ID.

#### Example Request

```http
GET http://localhost:5000/api/businesses/categories/1
```

