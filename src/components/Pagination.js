import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Pagination(props) {
  console.log(props)
  return (
    <ul>
      <li className="arrow" onClick={props.handlePagePrev}>
        <button disabled={props.prev}>
          <GrFormPrevious />
        </button>
      </li>
      <li className="arrow" onClick={props.handlePageNext}>
        <button disabled={props.next}>
          <GrFormNext />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
