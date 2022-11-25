/* Component */
import { PostIcon } from "../../icons";

/* Styles */
import styles from "../EditPostForm.module.css";

/* Interfaces */
import { inputFieldType } from "../../../components/common/InputField";
import formFieldType from "../types/formFieldType";

const editPostFormFields: formFieldType[] = [
  {
    label: "Post title",
    name: "posttitle",
    type: inputFieldType.text,
    icon: <PostIcon />,
    validation: {
      required: true,
    },
  },
  {
    label: "Post content",
    name: "postcontent",
    type: "textArea",
    icon: <PostIcon />,
    rows: 15,
    className: styles.contentTextarea,
    validation: {
      required: true,
    },
  },
  {
    name: "postimage",
    type: inputFieldType.text,
  },
];

export default editPostFormFields;
