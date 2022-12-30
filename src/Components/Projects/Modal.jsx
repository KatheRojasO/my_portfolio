import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
const closeButton = require("../../assets/icons/close.png");


export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="overlay-style"/>
      <div className="modal-style">
        <img src={closeButton} alt="not found" onClick={onClose}/>
        {children}
      </div>    
    </div>,
    document.getElementById("portal")
  );
}
