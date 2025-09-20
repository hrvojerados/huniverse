import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import remarkFootnotes from "remark-footnotes";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

import posts from "../posts.json";
import {formatDate} from "../utils.js";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(post.file);
    fetch(`/md/${post.file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [post]);
  console.log(content);
  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="pageContainer">
      <h1>{post.title}</h1>
      <p>{formatDate(post.date)}</p>
      <hr />
      <div className="pageContent">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath, remarkBreaks, remarkFootnotes]}
          rehypePlugins={[
            rehypeKatex,
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
          ]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
