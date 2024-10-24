import React, { useState } from 'react';
import Table from '../Component/Table'; 
import AddTask from '../Component/AddTask'; 
import UpdateTask from '../Component/UpdatedTask'; 
import DeleteTask from '../Component/DeletTask'; 
import axios from 'axios';
import toast from 'react-hot-toast';

export default function TaskManagement() {
    const [taskId, setTaskId] = useState(null);
    const [updatedTaskId, setUpdatedTaskId] = useState(null);
    const [taskValues, setTaskValues] = useState({
        name: "",
        task: "",
        date: "",
        description: ""
    });

    const deleteTask = (id) => {
        setTaskId(id);
    };

    const handleTaskDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/delete/${taskId}`);
            if (response.data.success) {
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setTaskValues({
            ...taskValues,
            [e.target.name]: e.target.value
        });
    };

    const updateTaskData = (taskId) => {
        setUpdatedTaskId(taskId);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.put(`http://localhost:8000/api/update/${updatedTaskId}`, taskValues);
            if (response.data.success) {
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Table deleteTask={deleteTask} updateTask={updateTaskData} />
            <AddTask />
            <UpdateTask 
                handleOnSubmit={handleOnSubmit} 
                value={taskValues} 
                handleChange={handleChange} 
            />
            <DeleteTask handleTaskDelete={handleTaskDelete} />
        </>
    );
}
