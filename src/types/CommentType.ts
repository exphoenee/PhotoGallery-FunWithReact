import LikeType from "./LikeType";
import UserType from "./UserType";

interface CommentType {
  id: string;
  postId: number | string;
  comment: string;
  createdAt: string;
  changed?: boolean;
  owner: UserType;
  likes: LikeType;
}

export default CommentType;
