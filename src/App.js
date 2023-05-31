import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [count, setCount] = useState(10)
  const [title, setTitle] = useState('Title')
  
  const increaseCount = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      {/* <Alert/> */}
      <h2>Using the useState hook</h2>
      <h2>The title is: {title}</h2>
      <button onClick={() => setTitle('New Title')}>Change the title</button>
      <h3>The current count is: {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default App;
