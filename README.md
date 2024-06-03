# Auth0 Authentication with React and Node.js

## Overview

This project demonstrates a full-stack application with authentication using Auth0. The frontend is built with React, and the backend uses Node.js and Express. The Auth0 authentication handles user login, logout, and protects API endpoints.

## Features

- User authentication with Auth0
- Protected API endpoints on the backend
- Integration between React frontend and Node.js backend
- Secure token handling for API requests

## Prerequisites

- Node.js and npm installed
- Auth0 account
- Create a new Auth0 application and API

## Getting Started

### 1. Set Up Auth0

1. **Create an Auth0 Account:**
   - Go to [Auth0](https://auth0.com/) and sign up or log in.

2. **Create a New Application:**
   - Navigate to the "Applications" section.
   - Click "Create Application".
   - Choose "Single Page Web Applications".
   - Note down the `Client ID` and `Domain`.

3. **Create a New API:**
   - Navigate to the "APIs" section.
   - Click "Create API".
   - Note down the `Identifier` (this will be your `Audience`).

4. **Configure Application Settings:**
   - Allowed Callback URLs: `http://localhost:3000`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`

### 2. Set Up the Backend


1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mansi-manhas/auth0-authentication.git
   cd server

   
2. **Install Dependencies:**

   ```bash
   npm install

   
3. **Create a `.env` file:**

   ```bash
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_AUDIENCE=your-auth0-audience
   AUTH0_ISSUER=https://your-auth0-domain/

4. **Start the Backend:**

   ```bash
   node server.js

### 3. Set Up the Frontend


1. **Navigate to the client directory:**

   ```bash
   cd client

   
2. **Install Dependencies:**

   ```bash
   npm install

   
3. **Create a `.env` file:**

   ```bash
   REACT_APP_AUTH0_DOMAIN=your-auth0-domain
   REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
   REACT_APP_AUTH0_AUDIENCE=your-auth0-audience


4. **Start the Frontend:**

   ```bash
   npm start

### 4. Access the application
Open http://localhost:3000 in your browser to view the application
