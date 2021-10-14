import { useState } from 'react';

const Home = () => {
  // let name = 'mario';
const [name, setName] = useState('Elvira');
const [age, setAge] = useState (100);
// const [initialValue, changingValue] = useState('initialValue')
//useState returns two values initialValue, changingValue

  const handleClick = () =>{
    setName('Cher');
    setAge(200)
  }
  // const handleClickAgain = (name, e) =>{
  //   console.log(name, e.target)
  // }
  return (  
    <div className="home">
      <h1>Homepage</h1>
      <p>{ name } is { age } years old.</p>
      <button onClick={handleClick}>Click me</button>
      {/*  
      const handleClickAgain = (name) =>{
        console.log(name)

        onClick={() => {handleClickAgain("mario")}} --> anonymous function waits until button is clicked 

        onClick = handleClickAgain("mario") --> function will execute before the button is clicked
    
    
    */}
      {/* <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button> */}
    </div>
  );
}
 
export default Home;