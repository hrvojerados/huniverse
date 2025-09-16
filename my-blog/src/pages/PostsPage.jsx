import posts from "../posts.json";
import { Link } from "react-router-dom";

export default function PostsPage() {
  return (
    <div id="postsPage">
      <h1>My posts</h1>
      <div id="postsContainer">
         {posts.map((post) => (
         <div class="Post">
            <div class="PostTitle">
              {post.title}
            </div>
            <div class="PostDate">
               {post.date}
            </div>
            <Link to={`/posts/${post.slug}`}>
               Read more
            </Link>
         </div>
         ))}
      </div>
    </div>
  );
}
