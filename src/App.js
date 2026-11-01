import {useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "App dark" : "App"}>
      <button onClick={() => setDark(!dark)}>
  {dark ? "Light Mode" : "Dark Mode"}
</button>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      
      <button onClick={() => setCount(count-1)}>
        -
      </button>
      <button onClick={() => setCount(count+1)}>
        +
      </button>

    </div>
  );
}

export default App;
