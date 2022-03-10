import React from "react";
import "../styles/components/Blog.scss";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Blog({blog}) {
  return (
    <div className="blog-container">
      <div className="image">
        <img src={blog.images} alt={blog.title} />
      </div>
      <div className="content">
        <div className="title">
          <h3>{blog.title}</h3>
        </div>
        <div className="subTitle">
        </div>
        <Link to={`/blog/${blog._id}`}>
        <Button
          content="Read more"
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        />
        </Link>
      </div>

    </div>
  );
}

export default Blog;
