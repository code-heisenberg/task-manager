import React, { useState} from 'react';

function TaskForm({ onAdd }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add the task to the list
        onAdd(task);
        //then clear the input
        setTask('');
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;