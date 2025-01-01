import express from "express";
import { signup, signin, updatePassword, updateEmail,updateUsername, updateAge } from "../controllers/auth.js";

const router = express.Router();

// Đăng ký
router.post("/signup", signup);

// Đăng nhập
router.post("/signin", signin);

//cập nhật password
router.put("/update-password", updatePassword);

// Cập nhật email
router.put("/update-email", updateEmail);

// Cập nhật username
router.put("/update-username", updateUsername);

// Cập nhật tuổi
router.put("/update-age", updateAge);

export default router;
