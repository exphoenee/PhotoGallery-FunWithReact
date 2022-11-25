import CommentType from "../types/CommentType";
import UsersMock from "./UsersMock";

/*TODO: the massages contains all the userdata as well :( . */

const CommentMock: CommentType[] = [
  {
    id: "eee41e18-1190-43b6-b9ce-d642a1b8f301",
    postId: "f6fb6247-4e05-45ac-b361-50c570445963",
    comment: "Lorem impsum dolor sit amet",
    createdAt: "2020-01-01T17:38:52",
    owner: UsersMock[1],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "7951c048-7940-4586-a9d2-147b9964c9f9",
    postId: "f6fb6247-4e05-45ac-b361-50c570445963",
    comment: "Dolor sit amet!",
    createdAt: "2020-01-02T21:48:12",
    owner: UsersMock[1],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "54922b91-8a43-45ec-a2aa-223443a7a006",
    postId: "f6fb6247-4e05-45ac-b361-50c570445963",
    comment: "Dolor sit amet!",
    createdAt: "2020-01-04T13:51:01",
    owner: UsersMock[0],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "17d2130c-365b-4227-8c17-8e7e7f91d81a",
    postId: "a879c998-3ecb-4923-9d44-d47cf86344f6",
    comment: "Dolor sit amet!",
    createdAt: "2020-01-05T11:51:01",
    owner: UsersMock[0],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "c1e532f5-8de9-435b-8fa0-b374b018d1fd",
    postId: "fd6105c1-2ce8-4cb9-8085-92cf8d7a3b20",
    comment: "Dolor sit amet!",
    createdAt: "2020-01-06T11:51:01",
    owner: UsersMock[0],
    likes: {
      like: [],
      dislike: [],
    },
  },
  {
    id: "eaf0a167-4639-41ac-988d-fdf3920874fd",
    postId: "fd6105c1-2ce8-4cb9-8085-92cf8d7a3b20",
    comment: "Dolor sit amet!",
    createdAt: "2020-01-07T18:19:20",
    owner: UsersMock[0],
    likes: {
      like: [],
      dislike: [],
    },
  },
];

export default CommentMock;
