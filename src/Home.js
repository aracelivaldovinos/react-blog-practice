const Home = () => {
  const handleClick = (e) =>{
    console.log('hello', e)
  }
  const handleClickAgain = (name, e) =>{
    console.log(name, e.target)
  }
  return (  
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      {/*  
      const handleClickAgain = (name) =>{
        console.log(name)

        onClick={() => {handleClickAgain("mario")}} --> anonymous function waits until button is clicked 

        onClick = handleClickAgain("mario") --> function will execute before the button is clicked
    
    
    */}
      <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button>
    </div>
  );
}
 
export default Home;