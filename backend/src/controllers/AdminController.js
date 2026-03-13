import {
  addClientMessage,
  addNewActivityLog,
  getAllRecentTask,
  addNewProject,
  getAllProjects,
  getAllMessages
} from "../models/AdminModel.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import { upload, uploadToCloudinary } from "../utils/cloudinary.js";

const isProduction = process.env.NODE_ENV === "production";

export const loginAdmin = async (req, res) => {
  try {
    const { secretKey } = req.body;

    if (secretKey != process.env.SECRET_KEY) {
      return res
        .status(401)
        .json({ message: "Secret key incorrect", success: false });
    }

    const accessToken = generateAccessToken({
      role: "admin",
    });

    const refreshToken = generateRefreshToken({
      role: "admin",
    });

    const accessCookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 5 * 60 * 1000,
      path: "/",
    };

    const refreshCookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    };

    res.cookie("access_token", accessToken, accessCookieOptions);
    res.cookie("refresh_token", refreshToken, refreshCookieOptions);

    res.status(200).json({
      message: "Login successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error in logging admin", success: false });
  }
};

export const logoutAdmin = async (req, res) => {
  try {
    res.cookie("access_token", "", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 0,
      path: "/",
    });

    res.cookie("refresh_token", "", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 0,
      path: "/",
    });

    res.status(200).json({
      message: "Logged out successfully!",
      success: true,
      role: "admin",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Logout failed",
      error: error.message,
      success: false,
    });
  }
};

export const handleClientMessage = async (req, res) => {
  try {
    const { fname, lname, email, message } = req.body;

    const newMessage = await addClientMessage({
      fname,
      lname,
      email,
      message,
    });

    const action_type = "Received new client message";
    const description = `sir/maam ${fname + " " + lname} sent you a message`;
    const target_table = "Contacts";

    const newActivityLog = await addNewActivityLog({
      action_type,
      description,
      target_table,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
      activityLog: newActivityLog,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error in receiving message " + error });
  }
};

export const getAllRecentTasks = async (req, res) => {
  try {
    const recentTasks = await getAllRecentTask();

    if (recentTasks) {
      res.status(201).json({
        message: "Successfully received all recent tasks",
        data: recentTasks,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error in getting all recent tasks" + error });
  }
};

export const addProject = async (req, res) => {
  console.log("CLODUINARY NAME: " + process.env.CLOUDINARY_CLOUD_NAME);
  try {
    const { proj_title, proj_description, proj_link } = req.body;

    if (!proj_title || !proj_description) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: proj_title, proj_description",
      });
    }

    const rawTechStack = req.body.proj_tech_stack;
    const proj_tech_stack = Array.isArray(rawTechStack)
      ? rawTechStack.filter(Boolean)
      : rawTechStack
        ? [rawTechStack]
        : [];

    let coverImage = process.env.DEFAULT_COVER_IMAGE_URL || null;

    if (req.file) {
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "Portfolio-Project-Images",
        proj_title.replace(/\s+/g, "_"),
      );
      coverImage = uploadResult?.secure_url ?? uploadResult?.url ?? coverImage;
    }

    const addProject = await addNewProject({
      proj_title,
      proj_description,
      proj_link,
      coverImage,
      proj_tech_stack: JSON.stringify(proj_tech_stack),
    });

    //Add activity log for a new project added
    const action_type = `Added new project`;
    const description = `You added a new project titled "${proj_title}" to your portfolio.`;
    const target_table = "Projects";
    await addNewActivityLog({
      action_type,
      description,
      target_table,
    })

    return res.status(201).json({
      success: true,
      data: addProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in adding project",
      success: false,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await getAllProjects();

    res.status(200).json({
      success: true,
      data: projects
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in getting all the projects",
      success: false,
    })
  }
}

export const getMessages = async (req, res) => {
  try {
    const contacts = await getAllMessages();

    res.status(200).json({
      success: true,
      data: contacts
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in getting all messages/contacts",
      success: false,
    })
  }
}
