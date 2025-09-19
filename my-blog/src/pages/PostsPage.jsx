import posts from "../posts.json";
import { Link } from "react-router-dom";

export default function PostsPage() {
  return (
    <div id="postsPage">
      <div id="postsContainer">
        {posts.map((post) => (
          <div className="Post" key={post.slug}>
            <div className="PostCard">
              <div className="PostTitle">{post.title}</div>
              <Link to={`/posts/${post.slug}`} className="openPostLink">
                <div className="open">
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
