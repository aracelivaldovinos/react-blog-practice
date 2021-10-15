import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs] =useState(null)
const [isLoading, setIsLoading] = useState(true)


useEffect(()=> {
  setTimeout(()=>fetch('http://localhost:8000/blogs')
  .then(res => {
    return res.json();
  })
  .then(data =>{
    console.log(data);
    setBlogs(data);
    setIsLoading(false)
  }), 1000)
}, [])

//setTimeOut is used to simulate a real fetching of data from a website
  return (  
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title= "All Blogs"/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Cher' )} title= "Cher's blogs"/> */}
    </div>
  );
}
 
export default Home;