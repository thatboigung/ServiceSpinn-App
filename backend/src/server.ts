import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({
  path: '.env'
});

const app = express();
const port: number = Number(process.env.PORT);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to ServiceSpin API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});