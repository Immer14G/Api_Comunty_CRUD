import React, { useState, useEffect } from 'react'; 
import Table from '../Component/Table'; 
import AddTask from '../Component/AddTask.jsx'; 
import UpdateTask from '../Component/UpdatedTask.jsx'; 
import DeleteTask from '../Component/DeletTask.jsx'; 
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserTable() {
    const [userId, setUserId] = useState();
    const [updatedUserId, setUpdatedUserId] = useState();
    const [value, setValue] = useState({
        name: "",
        task: "",
        date: "",
        description: ""
    });

    const deletuser = (userid) => {
        setUserId(userid);
    };

    const handleUserDelet = async () => {
        try {
            const DeleteTask = await axios.delete(`http://localhost:8000/api/delete/${userId}`);
            const response = DeleteTask.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error al eliminar la tarea.');
        }
    };

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const UpadteUserData = (Updatedid) => {
        setUpdatedUserId(Updatedid);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const UpdateTask = await axios.put(`http://localhost:8000/api/update/${updatedUserId}`, value);
            const response = UpdateTask.data;

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
            <Table Deletuser={deletuser} UpdateTask={UpadteUserData} />
            <AddTask />
            <UpdateTask handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange} />
            <DeleteTask handleUserDelet={handleUserDelet} />
        </>
    );
}
