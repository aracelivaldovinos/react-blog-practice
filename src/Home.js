import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

//setTimeOut is used to simulate a real fetching of data from a website
  return (  
    <div className="home">
      {error && <div>{error}.</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title= "All Blogs"/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Cher' )} title= "Cher's blogs"/> */}
    </div>
  );
}
 
export default Home;