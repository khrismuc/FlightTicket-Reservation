import React from "react";

function From(props, ref) {
  return (
    <div>
      <form>
        <textarea
          className="textarea"
          rows="2"
          ref={ref}
          label="text"
          aria-label="enter your location"
          placeholder="enter your location"
        ></textarea>
      </form>
    </div>
  );
}
const forwardStartPoint = React.forwardRef(From);
export default forwardStartPoint;
