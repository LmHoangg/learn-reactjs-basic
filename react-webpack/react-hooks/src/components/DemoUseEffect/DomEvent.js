import { useEffect, useState } from "react";
// 7.useEffect with DOM events
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
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 2. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi.

//  -------Lý thuyết chung
//  1. Callback luôn gọi sau khi component mounted

const tabs = ["posts", "comments", "albums", "photos", "todos"];

function Content() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setshowGoToTop] = useState(false);
  // console.log(type);

  //  CALL API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  //  BUTTON FOR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setshowGoToTop(true);
      } else {
        setshowGoToTop(false);
      }
      // setshowGoToTop(window.scrollY >=200) viết rút gọn của true false => giá trị đầu là false
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function: Dọn dẹp những thàng ở trong bộ nhớ khi ta unmounted component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>{width}</h2>

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
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
