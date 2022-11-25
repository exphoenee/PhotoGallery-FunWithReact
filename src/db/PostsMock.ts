import PostType from "../types/PostType";
import UsersMock from "./UsersMock";
import PhotosMock from "./PhotosMock";
import CommentMock from "./CommentMock";

/* TODO: it is not so good all the posts including all the user data (password, role, etc) that must be changed later, sometime, maybe by the way if there is a backend then we would use jason web tokens or TFA, etc... */

const PostsMock: PostType[] = [
  {
    id: "f6fb6247-4e05-45ac-b361-50c570445963",
    owner: UsersMock[0],
    title: "Post 1",
    content:
      "Content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur obcaecati quibusdam debitis voluptates ipsam neque dolores accusantium. Esse, quas voluptatum aliquam nemo nulla sed iure reprehenderit non in aliquid provident ducimus id? Impedit, enim non sit in vero doloribus!",
    createdAt: "2020-01-01T09:07:05",
    photo: PhotosMock[0],
    comments: [CommentMock[0], CommentMock[1], CommentMock[2]],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "a879c998-3ecb-4923-9d44-d47cf86344f6",
    owner: UsersMock[0],
    title: "Post 2",
    content:
      "Content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur obcaecati quibusdam debitis voluptates ipsam neque dolores accusantium. Esse, quas voluptatum aliquam nemo nulla sed iure reprehenderit non in aliquid provident ducimus id? Impedit, enim non sit in vero doloribus!",
    createdAt: "2020-01-02T07:11:05",
    photo: PhotosMock[1],
    comments: [CommentMock[3]],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "bde45136-aa4c-484a-b7fb-1e3f6a22afb0",
    owner: UsersMock[1],
    title: "Post 3",
    content:
      "Content 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur obcaecati quibusdam debitis voluptates ipsam neque dolores accusantium. Esse, quas voluptatum aliquam nemo nulla sed iure reprehenderit non in aliquid provident ducimus id? Impedit, enim non sit in vero doloribus!",
    createdAt: "2020-01-03T23:17:15",
    photo: PhotosMock[2],
    comments: [],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "fd6105c1-2ce8-4cb9-8085-92cf8d7a3b20",
    owner: UsersMock[1],
    title: "Post 4",
    content:
      "Content 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur obcaecati quibusdam debitis voluptates ipsam neque dolores accusantium. Esse, quas voluptatum aliquam nemo nulla sed iure reprehenderit non in aliquid provident ducimus id? Impedit, enim non sit in vero doloribus!",
    createdAt: "2020-01-04T12:07:05",
    photo: PhotosMock[3],
    comments: [CommentMock[4], CommentMock[5]],
    likes: {
      like: [],
      dislike: [],
    },
  },
];

export default PostsMock;
