import { BookItem } from "./BookItem";
import './bookItem.scss';

export const SearchList = () => {


  return (
    <>
      <section>
        <p className="search-result">Results for:<span>"ang" </span></p>
        <div className="search-result__container">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </section>

    </>
  )
}

