## eCommerce API
This is a simple eCommerce backend built using **Express.js** and **MongoDB (Mongoose)**
It covers core collections: **User, Product, Order, Cart**, and a **bonus feature** to fetch products for a specific vendor.

----

# Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv

---- 

# Folder Structure

E-commerce-API/
      bin/
      config/
      models/
         Cart.js
         Order.js
         Product.js
         User.js
      routes/
         createUser.js
         products.js
      app.js/
      server.js/ (Main file)
      .env/ (Sample env file (no secrets))

----

# Environmental Setup
Before running the project, **Create a `.env` file** based on `.env.example`.

### Example `.env` file:
inside .env file:
MONGO_URI=your-mongodb-uri-here

----

# Steps to Run this project

1. **Clone this repo**:
git clone https://github.com/sourabhkurne14/E-commerce-API.git
cd E-commerce-API

2. **Install dependencies**:
npm i express mongoose dotenv
npm install --save-dev nodemon

3. **Create your `.env` file**:
create `.env` file
Paste your MongoDB URI inside `.env`
-->> name the project name in MongoDb Atlas as 'ecommerce'

4. **Start the server**:
node server.js
or
nodemon server.js (if nodemon installed)

----

# API Routes and Postman Testing

1. Create a Vendor:
POST http://localhost:3000/create-user

json:
{
  "name": "Vendor 1",
  "email": "vendor1@example.com",
  "password": "123456",
  "role": "vendor" 
}

2. Add Product with Vendor ID:
Add a document directly in Atlas in the 'products' collection:

json:
{
  "name": "Product A",
  "price": 100,
  "stock": 50,
  "category": "Electronics",
  "vendorId": "PUT_VENDOR_OBJECT_ID_HERE"
}
-Make sure your vendorId you enter is not a string 
-It should be like this "vendorId": { "$oid": "id" }

3. Fetch Products of a Specific Vendor:
GET http://localhost:3000/products/:vendorID
Example: http://localhost:3000/products/685923edbfbe32b11bc09cbe

----

# Collections Designed

### User
- `name`
- `email`
- `password`
- `role` (`user` or `vendor`)
- `cart` (ref)

### Product
- `name`
- `price`
- `stock`
- `category`
- `vendorId` (ref to User)

### Cart
- `userId` (ref)
- `products[]` with quantity
- `total`

### Order
- `userId`
- `productIds`
- `status` (default: pending)
- Timestamps

----