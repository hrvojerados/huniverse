import posts from "../posts.json";
import tags from "../tags.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatDate, hasIntersection } from "../utils";

function formatTags(tags) {
  let val = "";
  for (const tag of tags) {
    if (tag != "all") {
      val  += ("#" + tag + "   ");
    }
  }
  return val;
}

function toogleTag(tag, selected) {
  if (tag === "all") {
    if (selected.length === 1 && selected[0] === "all") {
      return [];
    }
    return ["all"];
  }

  if (selected.includes("all")) {
    return [tag];
  }

  if (selected.includes(tag)) {
    return selected.filter((t) => t !== tag);
  }

  return [...selected, tag];
}

export default function PostsPage() {
  const [selectedTags, setSelectedTags] = useState("all");

  const visiblePosts = posts.filter(post =>
    hasIntersection(post.tags, selectedTags));
    return (
      <div id="posts-page-wrapper">
        <div id="posts-page">
          <div id="posts-container">
            <img src="images/filter.svg" id="filter-icon" /> 

            <div className="tags-container">
              {tags.map((tag) => (
                <button 
                  key={tag}
                  className={selectedTags.includes(tag) ? "tag-selected" : "tag"}
                  onClick={() =>
                    setSelectedTags((prev) => toogleTag(tag, prev))
                  }
                >
                  {tag}
                </button>
              ))}
            </div>

            {visiblePosts.map((post) => (
              <div className="post" key={post.slug}>
                <div className="post-card">
                  <div className="post-data">
                    <div className="post-titles">{post.title}</div>
                    <div className="post-meta">
                      <p className="post-dates">{formatDate(post.date)}</p>
                      <p className="post-tags">{formatTags(post.tags)}</p>
                    </div>
                  </div>

                  <Link to={`/posts/${post.slug}`} className="post-link">
                    <div className="post-open">Open</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {(visiblePosts.length === 0) &&
        (
          <div className="flex-center">
            <div id="no-posts">No posts yet :)</div>
          </div>)}
      </div>
    );
}
