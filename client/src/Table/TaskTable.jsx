import React, { useState } from 'react';
import Table from '../Component/Table.jsx';
import AddTask from '../Component/AddTask.jsx';
import UpdatedTask from '../Component/UpdatedTask.jsx';
import DeletTask from '../Component/DeletTask.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function TaskTable() {
    const [taskId, setTaskId] = useState();
    const [updatedTaskId, setUpdatedTaskId] = useState();
    console.log(updatedTaskId);
    const [value, setValue] = useState({
        name: "",
        task: "",
        date: "",
        description: ""
    });

    // Eliminar tarea
    const deleteTask = (taskId) => {
        setTaskId(taskId);
    };

    const handleTaskDelete = async () => {
        try {
            const deleteTask = await axios.delete(`http://localhost:8000/api/delete/${taskId}`);
            const response = deleteTask.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error al eliminar la tarea.');
        }
    };

    // Manejar cambio en los campos del formulario
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    // Actualizar tarea seleccionada
    const updateTaskData = (updatedId) => {
        setUpdatedTaskId(updatedId);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedTask = await axios.put(`http://localhost:8000/api/update/${updatedTaskId}`, value);
            const response = updatedTask.data;

            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error al actualizar la tarea.');
        }
    };

    return (
        <>
            <Table deleteTask={deleteTask} updateTask={updateTaskData} />
            <AddTask />
            <UpdatedTask handleOnSubmit={handleOnSubmit} value={value} handleChange={handleChange} />
            <DeletTask handleTaskDelete={handleTaskDelete} />
        </>
    );
}
