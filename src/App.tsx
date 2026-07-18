// React hooks
// Built in functions ( React hooks)
// React lifecycle App
// Create ( Event )
// Destroy


// We have mutliple components: Lifecycle
// variables ( State variables )
import {useState} from 'react'; // React hooks inbuilt 

let num = 123;
let name = "ABC";

function App() {
  const [count, setCount] = useState(0); // state variable

  // count = count + 1 // not your normal js variable
  
  return (
    <>
      <p> Current count: {count} </p>

      <button onClick={() => setCount(count + 1)}> Increment </button>
      
      <button onClick={() => setCount(count - 1)}> Decrement </button>
    </>
  );
}

export default App;
