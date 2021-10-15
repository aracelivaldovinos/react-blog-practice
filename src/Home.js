import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // let name = 'cher';
const [blogs, setBlogs] =useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'Cher', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Elvira', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Cher', id: 3 }
])

  return (  
    <div className="home">
      <BlogList blogs={blogs} title= "All Blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Cher' )} title= "Cher's blogs"/>
    </div>
  );
}
 
export default Home;