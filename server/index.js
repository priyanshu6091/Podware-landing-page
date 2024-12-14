import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDB from './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';
import { API_ROUTES } from './config/constants.js';
import earlyAccessRoutes from './routes/earlyAccess.js';
import logger from './utils/logger.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files from the dist directory
app.use(express.static(join(__dirname, '../dist')));

// API Routes
app.use(API_ROUTES.EARLY_ACCESS, earlyAccessRoutes);

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

// Error Handler
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  logger.error('Unhandled Rejection:', error);
  process.exit(1);
});