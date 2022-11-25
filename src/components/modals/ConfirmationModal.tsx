import React from "react";

/* Components */
import Modal from "./Modal";
import Button from "../common/Button/Button";
import { AcceptIcon, CancelIcon } from "../icons";

/* styles */
import styles from "./ConfirmationModal.module.css";

interface ConfirmationModalType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title: string;
  message: string;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  acceptText?: string;
  CustomAcceptIcon?: JSX.Element;
  onConfirm: (params: any) => void;
  cancelText?: string;
  CustomCancelIcon?: JSX.Element;
  onCancel?: (params: any) => void;
}

const ConfirmationModal: React.FC<ConfirmationModalType> = ({
  isOpen,
  setIsOpen,
  title,
  message,
  width = "md",
  acceptText = "Yes",
  CustomAcceptIcon = <AcceptIcon />,
  onConfirm,
  cancelText = "No",
  CustomCancelIcon = <CancelIcon />,
  onCancel,
}) => {
  const handleConfirm = (e: any) => {
    onConfirm(e);
    setIsOpen(false);
  };

  const handleCancel = (e: any) => {
    onCancel && onCancel(e);
    setIsOpen(false);
  };

  return (
    <Modal
      title={title}
      onClose={() => setIsOpen(false)}
      width={width}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      footer={
        <ConfirmModalButtons
          acceptText={acceptText}
          CustomAcceptIcon={CustomAcceptIcon}
          onConfirm={(e) => handleConfirm(e)}
          cancelText={cancelText}
          CustomCancelIcon={CustomCancelIcon}
          onCancel={(e) => handleCancel(e)}
        />
      }
    >
      <p className="text-center">{message}</p>
    </Modal>
  );
};

interface ConfirmationModalButtonsType {
  acceptText: string;
  CustomAcceptIcon: JSX.Element;
  cancelText: string;
  CustomCancelIcon: JSX.Element;
  onConfirm: (e: any) => void;
  onCancel: (e: any) => void;
}

const ConfirmModalButtons: React.FC<ConfirmationModalButtonsType> = ({
  acceptText,
  CustomAcceptIcon,
  cancelText,
  CustomCancelIcon,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.confirmModalFooter}>
      <Button icon={CustomAcceptIcon} label={acceptText} onClick={onConfirm} />
      <Button icon={CustomCancelIcon} label={cancelText} onClick={onCancel} />
    </div>
  );
};

export default ConfirmationModal;
