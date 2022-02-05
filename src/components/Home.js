import { useState } from "react";
import Table from "./Table";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faList, faPlus);

const Home = () => {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handleTask = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = [...addTask];
    newTask.push({ name: task, isCheck: false });
    setAddTask(newTask);
    setTask("");
  };
  return (
    <main>
      <h1>✏️ To do list</h1>
      <div className="wrapper">
        <ul className="wrapper">
          {addTask.map((task, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  id={index}
                  name="task"
                  ischeck={task.toString()}
                  onClick={() => {
                    const checked = [...addTask];
                    checked[index].isCheck === false
                      ? (checked[index].isCheck = true)
                      : (checked[index].isCheck = false);
                    setAddTask(checked);
                  }}
                />
                <label
                  htmlFor={index}
                  style={{
                    textDecoration: task.isCheck ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </label>
                <FontAwesomeIcon
                  className="icon-trash"
                  icon="trash"
                  onClick={() => {
                    const removed = [...addTask];
                    removed.splice(index, 1);
                    setAddTask(removed);
                  }}
                  color="#ff6347"
                />
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="submit-btn" onClick={handleSubmit}>
            <FontAwesomeIcon
              className="icon-trash"
              icon="plus"
              color="#ff6347"
            />
          </div>

          <input
            type="text"
            placeholder="✍🏻 my new task"
            value={task}
            onChange={handleTask}
          />
        </form>
      </div>
      <Table taskList={addTask} />
    </main>
  );
};

export default Home;
