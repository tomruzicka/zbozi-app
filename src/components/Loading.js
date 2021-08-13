import React from "react";

const Loading = () => {
  return (
    <div className="pan-loader">
      <div className="loader"></div>
      <div className="pan-container">
        <div className="pan"></div>
        <div className="handle"></div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Loading;
