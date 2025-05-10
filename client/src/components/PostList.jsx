import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";

function PostList() {
  const { postList } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}

export default PostList;
