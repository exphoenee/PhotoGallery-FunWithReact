import React from "react";
import PostType from "../../types/PostType";

/* Components */
import Modal from "./Modal";
import EditPostForm from "../forms/EditPostForm";
import CreatePostForm from "../forms/CreatePostFrom";

interface PostEditModalType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  post?: PostType;
  onClose?: () => void;
}

const PostEditModal: React.FC<PostEditModalType> = ({
  isOpen,
  setIsOpen,
  post,
  onClose,
}) => {
  return (
    <Modal
      title={post ? "Edit Post" : "Create Post"}
      onClose={onClose}
      width="lg"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {post ? (
        <EditPostForm post={post} moreOnSubmit={() => setIsOpen(false)} />
      ) : (
        <CreatePostForm moreOnSubmit={() => setIsOpen(false)} />
      )}
    </Modal>
  );
};

export default PostEditModal;
