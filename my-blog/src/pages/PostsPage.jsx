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
      <div id="postPageWraper">
        <div id="postsPage">
          <div id="postsContainer">
            <img src="images/filter.svg" id="filterSvg" /> 

            <div className="tagsContainer">
              {tags.map((tag) => (
                <button 
                  key={tag}
                  className={selectedTags.includes(tag) ? "selectedTag" : "tag"}
                  onClick={() =>
                    setSelectedTags((prev) => toogleTag(tag, prev))
                  }
                >
                  {tag}
                </button>
              ))}
            </div>

            {visiblePosts.map((post) => (
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
                    <div className="open">Open</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {(visiblePosts.length === 0) &&
        (
          <div className="centerer">
            <div id="noPosts">No posts yet :)</div>
          </div>)}
      </div>
    );
}
