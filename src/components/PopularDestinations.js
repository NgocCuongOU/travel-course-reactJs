import { useEffect } from "react";
import { useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import CardTour from "./CardTour";
import { useLocation } from "react-router";
import Pagination from "./Pagination";

function PopularDestinations() {
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

  const pagination = (num) => {
    setPage(page + num);
  };

  return (
    <section className="travel-main popular-place" id="popular-tour-area">
      <div className="container">
        <div className="row align-item">
          <div className="col col-lg-6">
            <div className="section-title">
              <h3>Địa điểm phổ biến</h3>
              <p>
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
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
                prev={!prev}
                next={!next}
                handlePagePre={() => pagination(-1)}
                handlePageNext={() => pagination(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
