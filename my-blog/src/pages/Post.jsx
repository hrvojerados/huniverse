import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'

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
        <Markdown
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
          remarkPlugins={[remarkMath, remarkGfm]}>
          {content}
        </Markdown>
      </div>
    </div>
  );
}
