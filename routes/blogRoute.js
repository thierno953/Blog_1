const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getDetailBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blog").post(createBlog);
router.route("/blog/:id").get(getDetailBlog);

module.exports = router;
