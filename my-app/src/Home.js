// import { useState, useEffect } from "react";
import BlogList from "./BlogList";

import useFetch from "./useFetch";
const Home = () => {

const {data: blog,isPending,error} = useFetch("http://localhost:8000/blogs")
 
//   const deleteHandler = (id) => {
//     const newBlogs = blog.filter((blogs) => blogs.id !== id);

//     setBlogs(newBlogs);
//   };

  return (

    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <p> loading....</p>}
      {blog && (<BlogList blog={blog} title="All blogs" />)}

      {/* <BlogList blog={blog.filter((blog) => blog.author==="mario")}  title="Mario blogs"/>  */}
    </div>
  );
};

export default Home;
