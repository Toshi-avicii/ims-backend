const express = require('express');
const adminRoute = express.Router();
const { adminMiddleware } = require('../middleWares/userMiddleware');
const { adminProfile } = require('../controllers/adminController.js');
const authenticateAdminToken = require('../middleWares/authenticateToken');

adminRoute
.get("/profile", adminMiddleware, authenticateAdminToken, adminProfile)
// .patch("/profile", adminMiddleware, updateAdmin)
// .post("/profile", adminMiddleware, createAdmin)

module.exports = adminRoute;