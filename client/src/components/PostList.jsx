import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const _signal = controller.signal;

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setFetching(false);
        addInitialPost(data.posts);
      });
    return () => {
      console.log("Cleaning Up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        !fetching && postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}

export default PostList;
