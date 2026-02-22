import express from "express";
import { loginAdmin, logoutAdmin, handleClientMessage, getAllRecentTasks } from "../controllers/AdminController.js";
import { jwtAuthenticate } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post('/admin/login', loginAdmin);
router.post('/admin/logout',jwtAuthenticate, logoutAdmin);
router.post('/admin/add-contact',jwtAuthenticate, handleClientMessage);
router.get('/admin/recent-tasks', jwtAuthenticate, getAllRecentTasks);

export default router;