const BlogList = ({blog,title,deleteHandler}) => {

  
    return (
           <>
          <h1>{title}</h1>

         {blog.map((blogs)=> (

            <div className="blog-Container" key={blogs.id}> 
              <h2>{blogs.title}</h2>
            <p> written by.{blogs.author}</p>
           {/* <button onClick={() => deleteHandler(blogs.id)}>Delete Blog</button>             */}

             </div>
      
    ))}
 </>
     );

}
 
export default BlogList;