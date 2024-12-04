import {useState} from 'react'

function To_do() {
    const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 rounded w-full mr-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 mb-2 ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              <span onClick={() => toggleTask(index)} className="cursor-pointer">
                {task.text}
              </span>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default To_do