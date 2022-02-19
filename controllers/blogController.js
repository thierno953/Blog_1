const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Blog = require("../Model/blogModel");
const ErrorHander = require("../utils/errorHander");

exports.createBlog = catchAsyncErrors(async (req, res) => {
  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    blog,
  });
});

exports.getAllBlogs = catchAsyncErrors(async (req, res) => {
  const blogs = await Blog.find();
  res.status(201).json({
    success: true,
    blogs,
  });
});

exports.getDetailBlog = catchAsyncErrors(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHander("Blog not found"));
  }
  res.status(200).json({ success: true, blog });
});
