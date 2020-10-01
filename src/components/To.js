import React from "react";

function To(props, ref) {
  return (
    <div>
      <form>
        <textarea
          className="textarea"
          rows="2"
          ref={ref}
          label="text"
          aria-label="enter your destination"
          placeholder="enter your destination"
        ></textarea>
      </form>
    </div>
  );
}
const forwardEndPoint = React.forwardRef(To);
export default forwardEndPoint;
