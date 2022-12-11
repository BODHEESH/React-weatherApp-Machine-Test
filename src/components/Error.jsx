import React from "react";


//Error component
const Error = (props) => {
  return (
    <>

      <div className="container">
        <div class="alert alert-dismissible alert-danger">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>

          {/* rendering error msg from props */}
          <strong>{props.error}</strong> try submitting again with a valid city name.

        </div>
      </div>
    </>


  );
};

export default Error;
