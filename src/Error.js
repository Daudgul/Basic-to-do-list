import React from "react";
import "./Error.css";

function Error(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />

      <div className="modal card">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className="button" type="button" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Error;
