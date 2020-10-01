import React from "react";

function SearchBar(props, ref, ref2) {
  return (
    <div>
      <div>
        <form>
          <textarea
            className="textarea"
            rows="2"
            ref={ref}
            onChange={props.onChange}
            label="text"
            aria-label="enter your destination"
            placeholder="enter your destination"
          ></textarea>
          <textarea
            className="textarea"
            rows="2"
            ref2={ref2}
            onChange={props.onChange2}
            label="text"
            aria-label="enter your location"
            placeholder="enter your location"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

const forwardSearchBar = React.forwardRef(SearchBar);
export default forwardSearchBar;
