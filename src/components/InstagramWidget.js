import instagramImg1 from "../images/instagram/1.png";
import instagramImg2 from "../images/instagram/2.png";
import instagramImg3 from "../images/instagram/3.png";
import instagramImg4 from "../images/instagram/4.png";
import instagramImg5 from "../images/instagram/5.png";
import instagramImg6 from "../images/instagram/6.png";

function InstagramWidget() {
  return (
    <aside className="single-sidebar-widget instagram-feed">
      <h4 className="widget-title">Instagram Feed</h4>
      <ul className="instagram-list clear">
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg1} alt="instagram" />
          </a>
        </li>
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg2} alt="instagram" />
          </a>
        </li>
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg3} alt="instagram" />
          </a>
        </li>
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg4} alt="instagram" />
          </a>
        </li>
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg5} alt="instagram" />
          </a>
        </li>
        <li className="instagram-list__item">
          <a href="#">
            <img src={instagramImg6} />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default InstagramWidget;
