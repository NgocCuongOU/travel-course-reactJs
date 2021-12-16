import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Apis, { endpoints } from "../configs/Apis";

import { MdDateRange } from "react-icons/md";
import { ImUserTie } from "react-icons/im";

function Blogs() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    handleLoadBlogs();
  }, []);

  const handleLoadBlogs = async () => {
    try {
      const res = await Apis.get(endpoints["recently-post-main"]);
      setBlogs(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  let blogContent = (
    <div className="col-md-12 d-flex justify-content-center">
      <PropagateLoader loading={true} size={25} color="#1ec6b6" />
    </div>
  );

  if (blogs !== null && blogs !== undefined) {
    blogContent = blogs.map((blog) => (
      <div className="col col-lg-4">
        <div className="single-trip">
          <div className="single-trip__img">
            <Link to={`/blogs/${blog.id}`}>
              <img
                src={blog.image}
                alt={`${blog.user.last_name} ${blog.user.first_name}`}
              />
            </Link>
          </div>
          <div className="single-trip__info">
            <div className="single-trip__auth">
              <div className="single-trip__date">
                <span>
                  <MdDateRange className="icon-blog" />
                  Ngày {new Date(blog.created_date).getDate()} tháng{" "}
                  {new Date(blog.created_date).getMonth()} năm{" "}
                  {new Date(blog.created_date).getFullYear()}
                </span>
              </div>
              <div className="single-trip__author">
                <span>
                  <ImUserTie className="icon-blog" />
                  {`${blog.user.last_name} ${blog.user.first_name}`}
                </span>
              </div>
            </div>
            <h3>
              <Link to={`/blogs/${blog.id}`}>
                {blog.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section className="travel-main trip">
      <div className="container">
        <div className="row align-item">
          <div className="col col-lg-6">
            <div className="section-title">
              <h3>Bản tin gần đây</h3>
            </div>
          </div>
        </div>
        <div className="row">{blogContent}</div>
      </div>
    </section>
  );
}

export default Blogs;
