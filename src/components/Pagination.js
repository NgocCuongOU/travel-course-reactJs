import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Pagination({ prev, next, handlePagePrev, handlePageNext }) {
  console.log({ prev, next, handlePagePrev, handlePageNext })
  return (
    <ul>
      <li className="arrow" onClick={handlePagePrev}>
        <button disabled={prev}>
          <GrFormPrevious />
        </button>
      </li>
      <li className="arrow" onClick={handlePageNext}>
        <button disabled={next}>
          <GrFormNext />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
