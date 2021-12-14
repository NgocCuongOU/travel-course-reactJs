import { AiOutlineSearch } from "react-icons/ai";

function SearchWidget() {
  return (
    <aside className="single-sidebar-widget search-widget">
      <form action="">
        <div className="form-group">
          <input
            required=""
            type="text"
            name=""
            id=""
            placeholder="Nhập từ khóa..."
          />
          <div className="input-group-append">
            <button className="input-btn">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="form-btn">
          <button className="btn-sidebar">Tìm kiếm</button>
        </div>
      </form>
    </aside>
  );
}

export default SearchWidget;
