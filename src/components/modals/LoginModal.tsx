import React from "react";

/* Components */
import Modal from "../modals/Modal";
import LoginForm from "../forms/LoginForm";

/* Constants */

export interface userModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const LoginModal: React.FC<userModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal title="Login" isOpen={isOpen} setIsOpen={setIsOpen}>
      <LoginForm closeModal={() => setIsOpen(false)} />
    </Modal>
  );
};

export default LoginModal;
