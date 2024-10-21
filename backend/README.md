# ServiceSpin Backend

## Description

The backend of ServiceSpin is built using Node.js and TypeScript, providing a robust and scalable server-side solution.

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

To set up the backend development environment, follow these steps:

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add the following environment variables:
   ```
   PORT=3000
   ```

## Running the Server

### Development Mode

To run the server in development mode with hot-reloading:

```
npm run dev
```

### Production Mode

To build and run the server in production mode:

```
npm run start
```

or

```
npm start
```

To build the server:

```
npm run build
```

Usage:

- `npm run dev` for development
- `npm run build` to compile TypeScript to JavaScript
- `npm start` to run the compiled JavaScript in production
- `npm test` to run tests
- `npm run lint` to run the linter

## API Documentation

(Add information about API endpoints here, or link to a separate API documentation)

## Database

This project uses MongoDB. Ensure you have MongoDB installed and running on your system, or provide a connection string to a MongoDB Atlas cluster in your `.env` file.

## Testing

Run the test suite using:

```
npm test
```

## Linting

To lint the codebase, run:

```
npm run lint
```

## Troubleshooting

If you encounter any issues:

1. Ensure MongoDB is running and accessible
2. Check that all environment variables are correctly set in `.env`
3. Ensure all dependencies are installed: `npm install`
4. Clear the Node.js cache: `npm cache clean --force`

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
