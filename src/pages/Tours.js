import { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useLocation } from "react-router";

import News from "../components/News";
import CardTour from "../components/CardTour";
import SearchTour from "../components/SearchTour";
import Slider from "../components/Slider";
import Apis, { endpoints } from "../configs/Apis";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import "../css/tour.css";

function Tours() {
  const [tours, setTours] = useState([]);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const loadTours = async () => {
      let query = location.search;

      if (query === "") {
        query = `?page=${page}`;
      } else {
        query += `&page=${page}`;
      }

      try {
        let res = await Apis.get(`${endpoints["tours"]}${query}`);

        setTours(res.data.results);
        setPrev(res.data.previous !== null);
        setNext(res.data.next !== null);
      } catch (error) {
        console.error(error);
      }
    };
    loadTours();
  }, [location.search, page]);

  const handlePage = (num) => {
    setPage(page + num);
  };

  return (
    <>
      <Slider />
      <SearchTour />
      <section className="travel-main popular-place">
        <div className="container">
          <div className="row align-item">
            <div className="col col-lg-12">
              <div className="popular-place__box-top">
                <span>Sắp xếp:</span>
                <ul className="popular-place__list">
                  <li className="popular-place__item hide">
                    Ngày khởi hành
                    <BsArrowUp />
                    <BsArrowDown />
                  </li>
                  <li className="popular-place__item">
                    Theo giá
                    <BsArrowUp />
                    <BsArrowDown />
                  </li>
                  <li className="popular-place__item">
                    Theo thời gian
                    <BsArrowUp />
                    <BsArrowDown />
                  </li>
                  <li className="popular-place__item">
                    Theo sao
                    <BsArrowUp />
                    <BsArrowDown />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {tours.map((tour) => {
              return <CardTour tour={tour} />;
            })}
          </div>
          <div className="row">
            <div className="col col-lg-12">
              <div className="popular-place-pagi">
                <Pagination
                  pre={!prev}
                  next={!next}
                  handlePagePrev={() => handlePage(-1)}
                  handlePageNext={() => handlePage(1)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
      <Blogs />
    </>
  );
}

export default Tours;
