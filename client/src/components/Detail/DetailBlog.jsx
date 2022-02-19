import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getBlogDetails } from "../../redux/actions/blogAction";
import Loader from "../Loader/Loader";
import "../../styles/sections/DetailBlog.scss";
import moment from "moment";

const DetailBlog = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { blog, loading, error } = useSelector((state) => state.blogDetail);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBlogDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main-container_detail">
          <div className="container_detail">
            <div className="image_detail">
              <img src={blog.images} alt={blog.title} />
            </div>
            <div className="content_detail">
            <h6>{moment(blog.createdAt).fromNow()}</h6>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailBlog;
