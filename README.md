# Medium-Inspired Blogging Platform

A scalable, serverless blogging platform inspired by Medium. This project uses modern web technologies to create a responsive and efficient blogging experience.

## Project Structure

The project is divided into three main folders:

- `backend`: Contains the server-side code
- `common`: Shared code used by both frontend and backend
- `frontend`: Contains the client-side React application

## Features

- User authentication using JWT
- Create and publish blog posts
- View all blog posts
- View individual blog posts
- Serverless architecture for scalability

## Technologies Used

### Backend

- Hono: Lightweight web framework
- Prisma: Database ORM
- Cloudflare Workers: Serverless deployment environment

### Frontend

- React Router: For client-side routing
- Tailwind CSS: For styling

### Common

- Zod: For data validation
- TypeScript: For type definitions

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/awaiskhan21/medium-blog/
   ```

2. Install dependencies:

   ```
   cd [project-folder]
   npm install
   ```

3. Set up environment variables and configuration files:

   a. Backend:

   - Create a `.env` file in the `backend` folder
   - Add the database URL:
     ```
     DATABASE_URL="your_database_url_here"
     ```
   - In `wrangler.toml`, add the Prisma Accelerate URL:
     ```
     [vars]
     DATABASE_URL="your_prisma_accelerate_url_here"
     JWT_SECRET="your_jwt_secret"
     ```

   b. Frontend:

   - In the `frontend/src/config.ts` file, add the deployed Cloudflare Worker URL:
     ```typescript
     export const BACKEND_URL = "your_cloudflare_worker_url_here";
     ```

4. Set up the database with Prisma:
   ```
   npx prisma migrate dev
   npx prisma generate --no-engine
   ```

## Usage

### Backend

1. Navigate to the `backend` folder
2. Run the development server:
   ```
   npm run dev
   ```

### Frontend

1. Navigate to the `frontend` folder
2. Start the React application:
   ```
   npm start
   ```

## API Routes

- `/signup`: User registration
- `/signin`: User login
- `/blog/:id`: Get a specific blog post
- `/blogs`: Get all blog posts
- `/publish`: Create a new blog post
