import express from "express";
import { loginAdmin, logoutAdmin, handleClientMessage, getAllRecentTasks, addProject, getProjects, getMessages } from "../controllers/AdminController.js";
import { jwtAuthenticate } from "../middleware/AuthMiddleware.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

//private
router.post('/admin/login', loginAdmin);
router.post('/admin/logout',jwtAuthenticate, logoutAdmin);
router.post('/admin/add-contact',jwtAuthenticate, handleClientMessage);
router.post('/admin/projects', jwtAuthenticate, upload.single("proj_cover_image"), addProject);
router.get('/admin/messages', jwtAuthenticate, getMessages);

//public
router.get('/projects', getProjects);
router.get('/admin/recent-tasks', getAllRecentTasks);

export default router;