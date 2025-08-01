<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useEffect } from 'react';
import UseMemoComponent from './UseMemo';
import TaskList from './ReactMemo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customInput, setCustomInput] = useState('');

  const addDefaultTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const addCustomTodo = () => {
    if (customInput.length > 5) {
      setTodos([...todos, customInput]);
      setCustomInput('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div>
      <h1>React Memo App</h1>
      <button onClick={addDefaultTodo}>Add Todo</button>
      <input
        type="text"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder="Enter custom task"
      />
      <button onClick={addCustomTodo}>Submit</button>

      <TaskList todos={todos} />

      <button onClick={incrementCounter}>Increment</button>
      <p>Counter: {counter}</p>

      <UseMemoComponent count={counter} />
    </div>
  );
};

export default App;


