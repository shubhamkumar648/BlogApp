import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error(" error:could not show the data for that resources");
          }

          // console.log(response);
          return response.json();
        })

        .then((data) => {
          setBlogs(data);
          setisPending(false);
          setError(null);
        })
        // .catch((err)=> console.log(err))
        .catch((err) => {
          setError(err.message);
          setisPending(false);
        });
    }, 1000);
  }, []);

  const deleteHandler = (id) => {
    const newBlogs = blog.filter((blogs) => blogs.id !== id);

    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <p> loading....</p>}
      {blog && (
        <BlogList blog={blog} title="All blogs" deleteHandler={deleteHandler} />
      )}

      {/* <BlogList blog={blog.filter((blog) => blog.author==="mario")}  title="Mario blogs"/>  */}
    </div>
  );
};

export default Home;
