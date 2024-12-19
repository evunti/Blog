import { useEffect, useState } from "react";

export default function Home() {
  const [blog, setBlog] = useState({});

  const [title, setTitle] = useState("hi");

  const getBlogData = async () => {
    const res = await fetch("http://localhost:3000");

    const json = await res.json();

    console.log(json);

    setBlog(json);
  };

  const createPost = async () => {
    console.log("Creating Post!!", title);

    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div>
      <h2 className="title">{blog?.title}</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
