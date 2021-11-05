import { useEffect, useState } from "react";
// 5.useEffect Hook Type 2
/*
- Side effects
- Events: Add / remove event listener
- Observer parttern: Subcribe/ unsubcribe
- Closure
- Timers: setInterval, setTimeout, clearInterval, clearTimeout
- useState 
- Mounted /unmounted
- Call API

??
1. Update DOM
- F8 blog title
2. Call API
3. Listen DOM Events
    - Scroll
    - Resize
4. Clean
    - Remove listener / Unsubcribe
    - Clear timer

*/

// 1. useEffect(callback, )
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// 2. useEffect(callback, [deps])

//  -------Lý thuyết chung
//  1. Callback luôn gọi sau khi component mounted
const tabs = ["posts", "comments", "albums", "photos", "todos"];
function Content() {
const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#555"
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title || post.name || post.url || post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
