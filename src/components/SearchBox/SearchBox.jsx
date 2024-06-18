import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchWrapper}>
      <label htmlFor="query">Find contacts by name</label>
        <input
        className={css.search}
        type="text"
        value={value}
        name="query"
        id="query"
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
