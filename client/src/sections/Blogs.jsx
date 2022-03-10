import React, { useEffect } from "react";
import Blog from "../components/Blog";
import Title from "../components/Title";
import "../styles/sections/Blogs.scss";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getBlog } from "../redux/actions/blogAction";
import Loader from "../components/Loader/Loader";

function Blogs() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getBlog());
  }, [dispatch, error, alert]); 

  return (
    <div className="blogs-container" id="blog">
      <div className="container">
        <div className="title-container">
          <Title title="Blogs" color="pink" />
          <p>Talk about my character.</p>
        </div>
        <div className="blogs">
          {loading ? ( 
            <Loader />
          ) : (
            <>
              {blogs &&
                blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
