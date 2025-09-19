import posts from "../posts.json";
import { Link } from "react-router-dom";

export default function PostsPage() {
  return (
    <div id="postsPage">
      <div id="postsContainer">
        {posts.map((post) => (
          <div className="Post" key={post.slug}>
            <div class="PostCard">
              <div className="PostTitle">{post.title}</div>
              <Link to={`/posts/${post.slug}`} class="link">
                <div class="open">
                  Open
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
