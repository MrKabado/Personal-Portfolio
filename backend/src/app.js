import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import adminRoutes from './routes/AdminRoutes.js';
import authRoutes from './routes/AuthRoutes.js';

const app = express();

const allowedOrigin = process.env.NODE_ENV === "production"
? ""
: "http://localhost:3000"

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('hi');
});

app.use('/api', adminRoutes);
app.use('/api', authRoutes);

export default app;

