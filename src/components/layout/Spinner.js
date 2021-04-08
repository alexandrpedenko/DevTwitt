import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <div
        className='spinn'
        style={{ width: "90px", margin: "100px auto", display: "block" }}
      >
        <i className='fas fa-spinner fa-pulse'></i>
      </div>
    </Fragment>
  );
};

export default Spinner;
