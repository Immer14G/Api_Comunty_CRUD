import React, { useEffect, useState } from 'react';
import Table from '../Component/Table'; 
import AddTask from '../Component/AddTask'; 
import UpdateTaskModal from '../Component/UpdatedTask'; 
import DeleteTask from '../Component/DeletTask'; 
import axios from 'axios';
import toast from 'react-hot-toast';

export default function TaskManagement() {
    const [taskId, setTaskId] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
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

    const updateTaskData = (task) => {
        setTaskValues(task);
        setModalOpen(true);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8000/api/update/${taskId}`, taskValues);
            if (response.data.success) {
                toast.success(response.data.message);
                setModalOpen(false);
                setTaskValues({
                    name: "",
                    task: "",
                    date: "",
                    description: ""
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Manejo del cierre del modal al desmontar
    useEffect(() => {
        if (isModalOpen) {
            const modalElement = document.getElementById('editTaskModal');
            const modalInstance = new window.bootstrap.Modal(modalElement);
            modalInstance.show();

            return () => {
                modalInstance.hide(); // Asegúrate de ocultar el modal al desmontar
            };
        }
    }, [isModalOpen]);

    return (
        <>
            <Table deleteTask={deleteTask} updateTask={updateTaskData} />
            <AddTask />
            <UpdateTaskModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleOnSubmit}
                value={taskValues}
                handleChange={handleChange}
            />
            <DeleteTask handleTaskDelete={handleTaskDelete} />
        </>
    );
}
