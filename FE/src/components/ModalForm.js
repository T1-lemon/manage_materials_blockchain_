import React from "react";
import { Modal } from "@themesberg/react-bootstrap";
import FormData from "./FormData";
import DetailProduct from "./DetailProduct";
import HistoryProduct from "./HistoryProduct";

const ModalForm = (props) => {
  const { handleClose, show, initValue, isEdit } = props;
  return (
    <>
      <Modal
        size={isEdit === 3 ? 'xl' : 'lg'}
        show={show}
        onHide={handleClose}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEdit === 1 ? (
            <FormData initValue={initValue} handleClose={handleClose} />
          ) : isEdit === 2 ? (
            <DetailProduct initValue={initValue} />
          ) : (
            <HistoryProduct initValue={initValue} />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
