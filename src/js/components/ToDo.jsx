import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../styles/ToDo.css';



const ToDo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    const pressEnter = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    }

    return (
        <div className="todo-wrapper">
            <div className="todo-container">
                <h1 className="todo-title">To Do List:</h1>

                <div className="input-container">
                    <input
                        type="text"
                        value={task}
                        onChange={(event) => setTask(event.target.value)}
                        onKeyPress= {pressEnter}
                        placeholder="Agrega una tarea..."
                        className="task-input"
                    />
                </div>

                <div className="tasks-container">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="task-item"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <span className="task-text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToDo;