// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Format: Bearer <token>
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user info attach
    next(); // ⚠️ agar ye bhool gaye to response kabhi nahi aayega
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default auth;
