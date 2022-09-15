import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BookResponseEntity } from "types";
import { apiUrl } from "../../config/api";
import { changeCurrentPage } from "../../features/search/searchSlice";
import { RootState } from "../../features/store";
import { generateQueryString } from "../../utils/logs.utils";
import { AdminSearchOne } from "./AdminSearchOne";
import "./searchList.scss";

export const AdminSerachComponent = () => {
  const dispatch = useDispatch();
  const { phrase, currentPage } = useSelector(
    (store: RootState) => store.search
  );
  const { changeBetwenDb } = useSelector((store: RootState) => store.adminAuth);

  const [books, setBooks] = useState<BookResponseEntity[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [resultsCount, setResultsCount] = useState<number>(0);

  useEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${apiUrl}/book/search/?${generateQueryString({
          phrase,
          currentPage,
          perPage,
        })}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      setBooks(data.books);
      setTotalPages(data.totalPages);
      dispatch(changeCurrentPage(data.currentPage));
      setResultsCount(data.count);
    })();
  }, [currentPage, perPage, phrase, changeBetwenDb]);

  const styles = {
    boldText: {
      fontWeight: "bold",
    },
  };

  return (
    <>
      <section>
        <p className="search-result">
          Results for:<span>"{phrase}" </span>
        </p>
        <div className="search-result--count">
          <p>
            <strong>{resultsCount}</strong> results
          </p>
        </div>

        <div className="search-result-view-per-page">
          <label>
            Results per page:
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              <option value="5" defaultValue={10}>
                5
              </option>
              <option value="10" defaultValue={10}>
                10
              </option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
        <div className="search-result__container">
          {books
            ? books.map((book) => (
                <div key={book._id}>
                  <AdminSearchOne book={book} />
                </div>
              ))
            : null}
        </div>

        <div className="pagination-container">
          <button
            className="pagination-container--controller"
            disabled={currentPage <= 1 ? true : false}
            onClick={() => dispatch(changeCurrentPage(currentPage - 1))}
          >
            <MdKeyboardArrowLeft />
          </button>

          <div className="pagination-container--pages">
            <div style={styles.boldText}>
              {totalPages === 0 ? 0 : currentPage}
            </div>
            <p>
              <span></span>
              <span></span>
              <span></span>
            </p>
            <div>{totalPages}</div>
          </div>

          <button
            className="pagination-container--controller"
            disabled={currentPage === totalPages ? true : false}
            onClick={() => dispatch(changeCurrentPage(currentPage + 1))}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};
