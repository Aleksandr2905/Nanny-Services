import { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Reviews.styled";
import { Modal } from "../Modal/Modal";
import { Appointment } from "../Appointment/Appointment";

export const Reviews = ({ reviews, nannies }) => {
  const [modalAppointment, setModalAppointment] = useState(false);

  const openModalAppointment = () => {
    setModalAppointment(true);
  };

  const closeModalAppointment = () => {
    setModalAppointment(false);
  };
  return (
    <>
      <s.ReviewsList>
        {reviews.map((review, index) => (
          <s.Container key={index}>
            <s.ReviewWrap>
              <s.Avatar>{review.reviewer[0].toUpperCase()}</s.Avatar>
              <s.Title>
                <s.Reviewer>{review.reviewer}</s.Reviewer>
                <s.RatingWrap>
                  <s.IconStar width={16} height={16}>
                    <use href={`${sprite}#icon-star`} />
                  </s.IconStar>
                  <s.Rating>{review.rating.toFixed(1)}</s.Rating>
                </s.RatingWrap>
              </s.Title>
            </s.ReviewWrap>
            <s.Comment>{review.comment}</s.Comment>
          </s.Container>
        ))}
        <s.Button type="button" onClick={openModalAppointment}>
          Make an appointment
        </s.Button>
      </s.ReviewsList>

      <Modal
        onCloseModal={closeModalAppointment}
        isModalOpen={modalAppointment}
      >
        <Appointment onCloseModal={closeModalAppointment} nannies={nannies} />
      </Modal>
    </>
  );
};
