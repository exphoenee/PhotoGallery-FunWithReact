import { createSlice } from "@reduxjs/toolkit";

/* Types and interfacs */
import PostType from "../types/PostType";

/* Mocks */
import PostsMock from "../db/PostsMock";
import LikeType from "../types/LikeType";

/* TODO: it would be better to take apart the comments from the post */
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: PostsMock as PostType[],
  },
  reducers: {
    createPost: (state, action) => {
      state.value = [...state.value, { ...action.payload }];
    },
    updatePost: (state, action) => {
      state.value = state.value.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
    removePost: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
    addComment: (state, action) => {
      // TODO: this is a little bit messy, later refactor it
      const post = state.value.find(
        (post) => post.id === action.payload.postId
      );

      if (post && post?.comments) {
        const comments = post?.comments;
        if (comments) {
          post.comments = [...comments, action.payload];
        }
      }
    },
    removeComment: (state, action) => {
      state.value = state.value.map((post) => {
        if (post.id === action.payload.postId) {
          post.comments = post.comments?.filter(
            (comment) => comment.id !== action.payload.id
          );
        }
        return post;
      });
    },
    updateComment: (state, action) => {
      console.log(action);
      state.value = state.value.map((post) => {
        if (post.id === action.payload.postId) {
          if (post.comments)
            post.comments = [
              ...post?.comments.filter(
                (comment) => comment.id !== action.payload.id
              ),
              action.payload,
            ];
        }
        return post;
      });
    },
    /* TODO: this is so ugly, refactor it later */
    addLike: (state, action) => {
      const { postId, commentId, likeGoesTo, likeType, userId } =
        action.payload;

      const post = state.value.find((post) => post.id === postId);

      if (post) {
        if (likeGoesTo === "post") {
          const likes = post.likes;

          const newLikes = Object.keys(likes).reduce((acc, key) => {
            acc[key as keyof LikeType] = likes[key as keyof LikeType].filter(
              (userLike) => userLike !== userId
            );
            return acc;
          }, {} as LikeType);

          post.likes = {
            ...newLikes,
            [likeType]: [...newLikes[likeType as keyof LikeType], userId],
          };
        }
        if (likeGoesTo === "comment") {
          post.comments = post.comments?.map((comment) => {
            if (comment.id === commentId) {
              const likes = comment.likes;
              const newLikes = Object.keys(likes).reduce((acc, key) => {
                acc[key as keyof LikeType] = likes[
                  key as keyof LikeType
                ].filter((userLike) => userLike !== userId);
                return acc;
              }, {} as LikeType);

              comment.likes = {
                ...newLikes,
                [likeType]: [userId, ...newLikes[likeType as keyof LikeType]],
              };
            }
            return comment;
          });
        }
      }
    },
    /* TODO: this is so ugly, refactor it later */
    removeLike: (state, action) => {
      const { postId, commentId, likeGoesTo, likeType, userId } =
        action.payload;

      const post = state.value.find((post) => post.id === postId);

      if (post) {
        const likes = post.likes;
        if (likes && likeGoesTo === "post") {
          post.likes = {
            ...likes,
            [likeType]: [
              ...likes[likeType as keyof LikeType].filter(
                (id) => id !== userId
              ),
            ],
          };
        }
        if (likeGoesTo === "comment") {
          post.comments = post.comments?.map((comment) => {
            if (comment.id === commentId) {
              comment.likes = {
                ...comment.likes,
                [likeType]: [
                  ...likes[likeType as keyof LikeType].filter(
                    (id) => id !== userId
                  ),
                ],
              };
            }
            return comment;
          });
        }
      }
    },
  },
});

export const {
  createPost,
  updatePost,
  removePost,
  addComment,
  removeComment,
  updateComment,
  addLike,
  removeLike,
} = postSlice.actions;

export default postSlice.reducer;
