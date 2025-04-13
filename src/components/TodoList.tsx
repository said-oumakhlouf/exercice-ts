import { useState, useEffect } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(tasks.length); // Met à jour le nombre de tâches
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <button
          onClick={handleAddTask}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mb-4"
        >
          Ajouter
        </button>

        <p className="text-sm text-gray-600 mb-2 text-center">
          Nombre de tâches : {count}
        </p>

        <ul className="list-disc pl-5 text-gray-800">
          {tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
