import posts from "../posts.json";
import tags from "../tags.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatDate, hasIntersection } from "../utils";

function formatTags(tags) {
  let val = "";
  for (const tag of tags) {
    val  += ("#" + tag + "   ");
  }
  return val;
}

function toogleTag(tag, selected) {
  if (selected.includes(tag)) {
    return selected.filter((t) => (t != tag));
  } else {
    return [... selected, tag];
  }
}

export default function PostsPage() {
  const [selectedTags, setSelectedTags] = useState(tags);

  return (
    <div id="postsPage">
      <div id="postsContainer">
        <img src="images/filter.svg" id="filterSvg"/> 
        <div className="tagsContainer">
          {tags.map((tag) => (
            <button 
              className={selectedTags.includes(tag) ? "selectedTag" : "tag"}
              onClick={() => setSelectedTags((prev) => toogleTag(tag, prev))}>
              {tag}
            </button>
          ))}
        </div>
        {posts.map((post) => hasIntersection(post.tags, selectedTags) && (
          <div className="Post" key={post.slug}>
            <div className="PostCard">
              <div className="PostData">
                <div className="PostTitle">{post.title}</div>
                <div className="DateAndTags">
                  <p className="Date">{formatDate(post.date)}</p>
                  <p className="Tags">{formatTags(post.tags)}</p>
                </div>
              </div>
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
