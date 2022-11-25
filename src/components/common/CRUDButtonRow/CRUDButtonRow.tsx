import React from "react";

/* Components */
import { DeleteIcon, EditIcon } from "../../icons";

/* styles */
import styles from "./CRUDButtonRow.module.css";

/* interfaces */
export interface CRUDButtonRowProps {
  position?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  onEdit: () => void;
  onDelete: () => void;
}

const CRUDButtonRow: React.FC<CRUDButtonRowProps> = ({
  onEdit,
  onDelete,
  position = "commentEdit",
}) => {
  return (
    <div className={styles[position]}>
      <button className={styles.deleteBtn} onClick={onDelete}>
        <DeleteIcon />
      </button>
      <button className={styles.editBtn} onClick={onEdit}>
        <EditIcon />
      </button>
    </div>
  );
};

export default CRUDButtonRow;
