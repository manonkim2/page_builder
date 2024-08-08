import SearchForm from "./SearchForm";
import Logo from "./logo.svg";
import * as s from "./style.css";

const SearchNavigarionBar = () => {
  return (
    <nav className={s.navigationBar}>
      <div className={s.startWrapper}>
        <div className={s.logo}>
          <Logo />
        </div>
      </div>
      <div className={s.centerWrapper}>
        <SearchForm />
      </div>
      <div className={s.endWrapper}></div>
    </nav>
  );
};

export default SearchNavigarionBar;
