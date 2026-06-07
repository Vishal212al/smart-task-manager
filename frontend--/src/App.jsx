import { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = async () => {
  const response = await fetch("http://localhost:5000/add-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
    }),
  });

  const data = await response.json();

  setTasks([...tasks, task]);

  alert(data.message);

  setTask("");
};

const handleLogin = async () => {
  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  alert(data.message);
};
  return (
    <div className="container">
      <div className="card">
        <h1>Smart Task Manager</h1>
        <h2>{isLogin ? "Login" : "Register"}</h2>  

        <input
         type="email"
         placeholder="Enter Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          />
        <br /><br />

       <input
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
        
        <br /><br />

        <button onClick={handleLogin}>Login</button>
        <p
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => setIsLogin(!isLogin)}
       >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
       </p>
      </div>
      <hr />

<h3>Add Task</h3>

<input
  type="text"
  placeholder="Enter Task"
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

<br /><br />

<button onClick={handleAddTask}>
  Add Task
</button>

<ul>
  {tasks.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </div>
  );
}

export default App;