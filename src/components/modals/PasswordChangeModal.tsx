import React from "react";

/* Components */
import Modal from "./Modal";
import PasswordChangeForm from "../forms/PasswordChangeForm";

/* Constants */
import { userModalProps } from "./LoginModal";

interface PasswordChangeModalProps extends userModalProps {
  onClose?: () => void;
}

const PasswordChangeModal: React.FC<PasswordChangeModalProps> = ({
  isOpen,
  setIsOpen,
  onClose,
}) => {
  return (
    <Modal
      title="Password Change"
      onClose={onClose}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="sm"
    >
      <PasswordChangeForm closeModal={() => setIsOpen(false)} />
    </Modal>
  );
};

export default PasswordChangeModal;
