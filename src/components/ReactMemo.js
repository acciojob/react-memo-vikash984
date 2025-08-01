import React from 'react';

const TaskList = React.memo(({ todos }) => {
  console.log('Rendering TaskList...');
  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;
