import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

const getSecret = (primary, fallback) => {
  const secret = process.env[primary] || process.env[fallback];
  if (!secret) {
    throw new Error(`Missing JWT secret: set ${primary} or ${fallback}`);
  }
  return secret;
};

const getAccessSecret = () => getSecret("ACCESS_TOKEN", "MY_SECRET_KEY");
const getRefreshSecret = () => getSecret("REFRESH_TOKEN", "MY_REFRESH_TOKEN");
const isProduction = process.env.NODE_ENV === "production";

export const refreshToken = async (req, res) => {
  const token = req.cookies.refresh_token;
  if (!token) {
    return res.status(401).json({
      message: "No refresh token provided",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, getRefreshSecret());

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Invalid refresh token",
        succes: false
      })
    }

    const newAccessToken = generateAccessToken({
      role: decoded.role,
    });

    const accessCookieOptions = {
      httpOnly: true,
      sameSite: isProduction ? "None" : "Lax",
      secure: isProduction,
      maxAge: 5 * 60 * 1000,
      path: "/",
    };

    res.cookie("access_token", newAccessToken, accessCookieOptions);

    res.json({
      message: "Access token refreshed successfully",
      success: true,
    });

    console.log("Access token refreshed successfully");
  } catch (error) {
    res.json({
      message: "Refresh token invalid or expired",
      success: false,
    });
  }
};

export const verifyAdmin = async (req, res) => {
  const access_token = req.cookies.access_token;
  const refresh_token = req.cookies.refresh_token;

  if (!access_token && !refresh_token) {
    return res.status(401).json({
      message: "Unauthorized Access",
      success: false,
      authorized: false
    });
  };

  try {
    const decoded = jwt.verify(refresh_token, getRefreshSecret());

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Unauthorized",
        success: false,
        authorized: false,
      });
    }

    return res.status(200).json({
      message: "Authorized",
      success: true,
      authorized: true,
    })

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Error in verifying admin " + error.message,
      success: false,
    });
  }
};

export const jwtAuthenticate = async (req, res, next) => {
  const access_token = req.cookies.access_token;
  const refresh_token = req.cookies.refresh_token;

  if (!access_token && !refresh_token) {
    return res.status(401).json({ 
      message: "Unauthorized Access",
    });
  }

  try {
    if (access_token) {
      const decoded = jwt.verify(access_token, getAccessSecret());
      req.user = decoded;
      next();
    } else {
      const decoded = jwt.verify(refresh_token, getRefreshSecret());
      req.user = decoded;
      next();
    }
  } catch (error) {
    return res.status(401).json({ 
      message: "Invalid Token",
      success: false,
    });
  }
}