import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value);
    console.log(setSearchTerm);
  };
  const clearInput = () => {
    searchValue.current.value = "";
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section ">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* <i className="fa fa-search"></i> */}
          <input
            type="text"
            id="name"
            ref={searchValue}
            placeholder="Na co máte chuť?"
            onChange={searchMeal}
          />
          <i className="fa fa-times" onClick={clearInput}></i>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
