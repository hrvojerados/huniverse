import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import posts from "../posts.json";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}posts/${post.file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [post]);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
