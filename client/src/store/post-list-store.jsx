import { createContext } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
