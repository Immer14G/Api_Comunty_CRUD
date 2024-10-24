import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ deleteTask, updateTask }) {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/get');
                setTasks(response.data.tasks);
                setError(null); 
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setError("Error al cargar tareas."); 
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Gestionar <b>Tareas</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                                <i className="material-icons">&#xE147;</i> <span>Añadir Nueva Tarea</span>
                            </a>
                        </div>
                    </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Tarea</th>
                            <th>Fecha</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <tr key={task._id}>
                                    <td></td>
                                    <td>{task.name}</td>
                                    <td>{task.task}</td>
                                    <td>{task.date}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editTaskModal" onClick={() => updateTask(task._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Editar">&#xE254;</i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteTaskModal" onClick={() => deleteTask(task._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Eliminar">&#xE872;</i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No hay tareas disponibles.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
