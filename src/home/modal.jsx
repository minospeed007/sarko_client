import React from 'react';
import './modal.css';

const Modal = ({ message, type, onClose }) => {
  return (
    <div className="modal-div">
      <div className="modal-content">
         <button className="close-button" onClick={onClose}>X</button>
        <div className={`modal-message ${type}`} >{message}</div>
      </div>
    </div>
  );
};

export default Modal;
