import express from "express";
import { loginAdmin, logoutAdmin, handleClientMessage, getAllRecentTasks, addProject, getProjects, getMessages } from "../controllers/AdminController.js";
import { jwtAuthenticate } from "../middleware/AuthMiddleware.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

router.post('/admin/login', loginAdmin);
router.post('/admin/logout',jwtAuthenticate, logoutAdmin);
router.post('/admin/add-contact',jwtAuthenticate, handleClientMessage);
router.get('/admin/recent-tasks', jwtAuthenticate, getAllRecentTasks);
router.post('/admin/projects', jwtAuthenticate, upload.single("proj_cover_image"), addProject);
router.get('/admin/projects', jwtAuthenticate, getProjects);
router.get('/admin/messages', jwtAuthenticate, getMessages)

export default router;