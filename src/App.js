import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import the generated Tailwind CSS

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);

  function changeHandler(e) {
    setInputValue(e.target.value);
  }

  function clickHandler(e) {
    e.preventDefault();
    if (inputValue === '') {
      alert('Please enter a value');
      return;
    }
    setTodo([...todo, inputValue]);
    setTimeout(() => {
      deleteHandler(inputValue);
    }, 3 * 24 * 60 * 60 * 1000);
    setInputValue('');
  }

  function deleteHandler(val) {
    const newtodo = todo.filter((item) => item !== val);
    setTodo(newtodo);
  }

  return (
    <div className="container mx-auto p-4">
      <form className="mb-4">
        <input
          className="border rounded p-2 mr-2"
          value={inputValue}
          onChange={changeHandler}
          placeholder="Enter a task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={clickHandler}
        >
          Add
        </button>
      </form>
      <ul>
        {todo.map((e, index) => (
          <li key={index} className="mb-2">
            {e}{' '}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteHandler(e)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
