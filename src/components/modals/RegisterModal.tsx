import React from "react";

/* Components */
import Modal from "./Modal";
import RegisterForm from "../forms/RegisterForm";

/* Constants */
import { userModalProps } from "./LoginModal";

const RegisterModal: React.FC<userModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      title="Registration"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="sm"
    >
      <RegisterForm closeModal={() => setIsOpen(false)} />
    </Modal>
  );
};

export default RegisterModal;
