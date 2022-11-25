import LikeType from "./LikeType";
import PhotoType from "./PhotoType";
import UsreType from "./UserType";
import CommentType from "./CommentType";
export default interface PostType {
  id: string;
  owner: UsreType;
  photo: PhotoType;
  title: string;
  content: string;
  comments: CommentType[];
  createdAt: string;
  likes: LikeType;
}
