import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Title",
    body: "This is the body",
    reactions: 0,
    userId: 9,
    tags: ["HelloWorld"],
  },
  {
    id: 2,
    title: "Titl2",
    body: "This is the body of content 2",
    reactions: 0,
    userId: 9,
    tags: ["HelloWorld1232"],
  },
];

export default PostListProvider;
