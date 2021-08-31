import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "minna", id: 1 },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "richard",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "minna",
      id: 3,
    },
  ]);

  return <div className="home">
    <BlogList agood={blogs} title="All Blogs!"/>
  </div>;
};

export default Home;
