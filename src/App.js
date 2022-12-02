import './App.css';
import React,{useState} from "react"

function App() {
  // function greeting(name) {
    
  //   alert(`Hello, ${name}`);
  // }
  
  // function processUserInput(callback) {
  //   const name = prompt("Please enter your name.");
  //   callback(name);
  // }
  
  // processUserInput(greeting);
  //Example of Callback functions.

  const [userInput, setUserInput] = useState('')
  const inputChangeHandler = (event)=>{
    setUserInput(event.target.value)
  }

  function handleClick(e)
  {
    console.log(e.target)
  }

  // function handleCopy(){
  //   alert("Don't copy, be your own.")
  // }
  return (
    <div className="App">
      <header className="App-header">
        
      <input type="text" name="name" 
      onChange={inputChangeHandler} 
      value = {userInput}/>
<button onClick={handleClick}>Click Me</button>
<p onCopy={handleCopy}>HEllo THere</p>
      </header>
    </div>
  );
}

export default App;
