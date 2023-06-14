import React, { useContext } from "react";
import "./Modal.css";
import { FavoritesContext } from "../context/FavoritesContext";



const Modal = () => {
  const { showModal, setShowModal, deleteFromFavorites } =
    useContext(FavoritesContext);
  // Remove console logs before delivering a code ;)
  console.log(showModal);
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper_content">
        <h3>Confirmation</h3>
        <p>Are you sure?</p>
        <div className="modal-wrapper_actions">
          <button className="delModal" onClick={() => deleteFromFavorites()}>
            Delete
          </button>
          <button className="addFavModal" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
