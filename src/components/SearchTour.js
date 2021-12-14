import { useState } from "react";
import { useHistory, useLocation } from "react-router";

function SearchTour() {
  const [q, setQ] = useState("");

  const history = useHistory();
  const location = useLocation();

  const search = (event) => {
    event.preventDefault();

    let query = location.pathname;

    if (query === "/tours") {
      history.push(`/tours/?q=${q}#popular-tour-area`);
    } else {
      history.push(`/?q=${q}#popular-tour-area`);
    }
  };

  return (
    <div className="search-area">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <div className="form-ask">
              <h3>Bạn muốn đi đâu?</h3>
            </div>
          </div>
          <div className="col col-lg-9">
            <div className="search-wrap">
              <form action="" className="search-form" onSubmit={search}>
                <div className="form-item">
                  <input
                    value={q}
                    onChange={(event) => setQ(event.target.value)}
                    type="text"
                    name=""
                    id=""
                    placeholder="Bạn muốn đi đâu?"
                  />
                </div>
                <div className="form-item">
                  <input type="date" name="" id="" />
                </div>
                <div className="form-item">
                  <select name="" id="">
                    <option value="null">Loại du lịch</option>
                    <option value="trong-nuoc">Du lịch trong nước</option>
                    <option value="ngoai-nuoc">Du lịch ngoài nước</option>
                  </select>
                </div>
                <div className="form-item">
                  <button type="submit" className="btn">
                    Tìm kiếm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTour;
