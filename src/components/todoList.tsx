import React, { useState } from 'react';

const ToDoList = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<string[]>([]);
  const onChange = (ev: any) => setToDo(ev.target.value);
  const onSubmit = (ev: any) => {
    ev.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
    console.log(toDos);
  };

  return (
    <div>
      <h1>My to dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="write your todo..." />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
