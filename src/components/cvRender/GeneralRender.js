import React from "react";

function GeneralRender(props) {
  return (
    <div className="header">
      <div className="header-name">
        <h1>{props.last}</h1>
        <h1>{props.first}</h1>
      </div>
      <h2>{props.email}</h2>
      <h2>{props.phone}</h2>
    </div>
  );
}

export default GeneralRender;