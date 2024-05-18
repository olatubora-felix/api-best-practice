import { useGetPosts } from "../../hook/useGetPosts";
const Posts = () => {
  const { status, posts, error } = useGetPosts();
  console.log(posts);
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>{error}</p>;
  }
  return (
    <div className="h-screen overflow-y-scroll py-10 space-y-3 flex-1 p-3">
      {posts?.map((post) => (
        <div key={post.id} className=" text-center text-purple-700">
          <h2 className="text-2xl">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
