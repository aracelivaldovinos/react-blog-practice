import { useState } from 'react';

const Home = () => {
  // let name = 'cher';
const [blogs, setBlogs] =useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'Cher', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Elvira', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Cher', id: 3 }
])
// const [name, setName] = useState('Elvira');
// const [age, setAge] = useState(100);
// const [initialValue, changingValue] = useState('initialValue')
//useState returns two values initialValue, changingValue

  // const handleClick = () =>{
  //   setName('Cher');
  //   setAge(200)
  // }
  // const handleClickAgain = (name, e) =>{
  //   console.log(name, e.target)
  // }
  return (  
    <div className="home">
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
      {/* <p>{ name } is { age } years old.</p>
      <button onClick={handleClick}>Click me</button> */}
      {/*  
      const handleClickAgain = (name) =>{
        console.log(name)

        onClick={() => {handleClickAgain("cher")}} --> anonymous function waits until button is clicked 

        onClick = handleClickAgain("cher") --> function will execute before the button is clicked
    
    
    */}
      {/* <button onClick={(e) => handleClickAgain("cher", e)}>Click me again</button> */}
    </div>
  );
}
 
export default Home;