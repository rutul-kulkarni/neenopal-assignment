import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faPhoneAlt,
  faEarthAsia,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faPenToSquare,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import Modal from "./Modal";
import { CardContext } from "../CardContext";
import { IMAGE_URL } from "../constants";

function Card({ name, email, phone, website, idx }) {
  const { personData, setPersonData } = useContext(CardContext);

  const [isLike, setLike] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLike = () => {
    setLike(!isLike);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setModalData({ name, email, phone, website });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData({});
  };

  const handleDelete = () => {
    const newdata = personData.filter((val, index) => idx !== index);
    setPersonData(newdata);
  };

  return (
    <div className="card">
      <img src={IMAGE_URL} alt="User" />
      <div>
        <div className="card-padding">
          <div className="name-header ">{name}</div>
          <div className="name">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="sub-text">{email}</div>
          </div>
          <div className="name">
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <div className="sub-text">{phone}</div>
          </div>
          <div className="name">
            <div>
              <FontAwesomeIcon icon={faEarthAsia} />
            </div>
            <div className="sub-text">{website}</div>
          </div>
        </div>

        <div className="action-buttons">
          <div className="btn" onClick={handleLike}>
            <FontAwesomeIcon
              icon={isLike ? fasHeart : farHeart}
              className="heart"
            />
          </div>
          <div className="btn" onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          <div className="btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        modalData={modalData}
        idx={idx}
      />
    </div>
  );
}

export default Card;
