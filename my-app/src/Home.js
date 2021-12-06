import {useState} from 'react'
import BlogList from './BlogList'

const Home = () => {

const [blog,setBlogs] = useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
])

const deleteHandler = (id) => {

    const newBlogs = blog.filter(blogs => blogs.id!== id)

    setBlogs(newBlogs)

}
    return ( 

        <div className="home">
             
           <BlogList blog={blog} title="All blogs"  deleteHandler={deleteHandler}/>
           {/* <BlogList blog={blog.filter((blog) => blog.author==="mario")}  title="Mario blogs"/>  */}

        </div>
     );
}            
    
export default Home;