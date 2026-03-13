import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API key:", process.env.CLOUDINARY_API_KEY);
console.log("API secret:", process.env.CLOUDINARY_API_SECRET);
})