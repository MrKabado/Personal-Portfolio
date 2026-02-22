import { addClientMessage, addNewActivityLog, getAllRecentTask } from "../models/AdminModel.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

const isProduction = process.env.NODE_ENV === "production";

export const loginAdmin = async (req, res) => {
  try {
    const {secretKey} = req.body;

    if (secretKey != process.env.SECRET_KEY ) {
      return res.status(401).json({message: "Secret key incorrect", success: false});
    }

    const accessToken = generateAccessToken({
      role: "admin",
    });

    const refreshToken = generateRefreshToken({
      role: "admin"
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
      success: true
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Error in logging admin", success: false});

  }
}

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
}

export const handleClientMessage = async (req, res) => {
  try {
    const { fname, lname, email, message } = req.body;

    const newMessage = await addClientMessage({
      fname, lname, email, message
    });

    const action_type = "Received new client message";
    const description = `sir/maam ${fname + " " + lname} sent you a message`;
    const target_table = "Contacts";

    const newActivityLog = await addNewActivityLog({
      action_type, 
      description, 
      target_table
    })

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
      activityLog: newActivityLog,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Error in receiving message " + error,});
  }
}

export const getAllRecentTasks = async (req, res) => {
  try {
    const recentTasks = await getAllRecentTask();

    if (recentTasks) {
      res.status(201).json({
        message: "Successfully received all recent tasks",
        data: recentTasks
      })
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Error in getting all recent tasks" + error,});
  }
}