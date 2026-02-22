import express from 'express';
import { refreshToken, verifyAdmin } from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/refresh-token', refreshToken);
router.get('/verify-admin', verifyAdmin);

export default router;