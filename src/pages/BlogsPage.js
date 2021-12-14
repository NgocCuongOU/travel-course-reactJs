import CardBlog from "../components/CardBlog";
import CategoryWidget from "../components/CategoryWidget";
import SearchWidget from "../components/SearchWidget";
import BlogWidget from "../components/BlogWidget";
import TagWidget from "../components/TagWidget";
import InstagramWidget from "../components/InstagramWidget";
import NewLetterWidget from "../components/NewLetterWidget";
import { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import Bradcam from "../components/Bradcam";
import Pagination from "../components/Pagination";

import "../css/main.css";
import "../css/about.css";
import "../css/contact.css";
import "../css/blog.css";
import { useLocation } from "react-router";

function Blogspage() {
  const [blogs, setBlogs] = useState([]);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    loadBlogs();
  }, [location.search, page]);

  const loadBlogs = async () => {
    try {
      let query = location.search;

      if (query === "") {
        query = `?page=${page}`;
      } else {
        query += `&page=${page}`;
      }

      let res = await Apis.get(`${endpoints["blogs"]}${query}`);

      setBlogs(res.data.results);
      setPrev(res.data.previous !== null);
      setNext(res.data.next !== null);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePage = (num) => {
    setPage(page + num);
  };

  return (
    <div id="main">
      <Bradcam
        title="Tin tức"
        heading="Cuộc đời là những chuyến đi Trải nghiệm Khám Phá chính bản thân mình"
      />
      <section className="travel-main blog">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="blog__left-sidebar">
                {blogs.map((blog) => (
                  <CardBlog blog={blog} />
                ))}
                <div className="popular-place-pagi">
                  <Pagination
                    prev={!prev}
                    next={!next}
                    handlePagePrev={() => handlePage(-1)}
                    handlePageNext={() => handlePage(1)}
                  />
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="blog__right-sidebar">
                <SearchWidget />
                <CategoryWidget />
                <BlogWidget />
                <TagWidget />
                <InstagramWidget />
                <NewLetterWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogspage;
