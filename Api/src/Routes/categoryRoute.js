const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const { addCategory, updateCategory } = require("../controllers/categoryController");

/**
 * @description To get all categories
 * @api /api/category/create
 * @access Private
 * @type POST
 * @return response
 */

router.post("/create", auth, authorizeRole("admin"), addCategory);

/**
 * @description To update categories by id
 * @api /api/category/update/:id
 * @access Private
 * @type PUT
 * @return response
 */
router.patch("/update/:id", auth, authorizeRole('admin'), updateCategory);

module.exports = router;
