import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTasks, addTask, deleteTask, updateTask } from "../api/tasks";
import { toast } from "react-hot-toast";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      const addedTask = await addTask(newTask);
      setTasks([...tasks, addedTask]);
      toast.success("Task added");
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(taskId);
        setTasks(tasks.filter((task) => task.id !== taskId));
        toast.success("Task deleted");
      } catch (error) {
        toast.error("Failed to delete task");
      }
    }
  };

  const handleToggleTaskCompletion = async (taskId) => {
    try {
      const updatedTask = await updateTask(taskId, { completed: true });
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
      toast.success("Task marked as completed");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  return (
    <div>
      <h1>Tasks Manager</h1>
      {/* Formularz dodawania zadania */}
      {/* Lista zadań */}
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => handleToggleTaskCompletion(task.id)}>
            Mark as Completed
          </button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
