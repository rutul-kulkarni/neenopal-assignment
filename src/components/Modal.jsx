import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";
import { CardContext } from "../CardContext";

const Modal = ({ open, onClose, modalData, idx }) => {
  const { personData, setPersonData } = useContext(CardContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (!!modalData) {
      setName(modalData.name);
      setEmail(modalData.email);
      setPhone(modalData.phone);
      setWebsite(modalData.website);
    }
  }, [modalData]);

  const handleUpdatedata = () => {
    let updatedData = [...personData];
    updatedData[idx] = {
      name,
      email,
      phone,
      website,
    };

    setPersonData(updatedData);
    onClose();
  };

  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <div className="closeBtn" onClick={onClose}>
            X
          </div>
          <form onSubmit={handleUpdatedata}>
            <div className="content">
              <div className="input-container">
                <label className="label">
                  Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Phone<span className="required">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Website<span className="required">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-outer-container">
              <div className="btnContainer">
                <button className="btnOutline" onClick={onClose}>
                  Cancel
                </button>
                <button className="btnPrimary" type="submit">
                  Ok
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
