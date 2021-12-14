import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apis, { endpoints } from "../configs/Apis";

function CategoryWidget() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      let res = await Apis.get(endpoints["categories"]);

      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside className="single-sidebar-widget cate-widget">
      <h4 className="widget-title">Danh mục</h4>
      <ul className="cate-list">
        {categories.map((cate) => {
          return (
            <li className="cate-list__item" key={cate.id}>
              <Link>
                <p>{cate.name}</p>
                <p>(3)</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default CategoryWidget;
