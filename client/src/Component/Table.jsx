import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ deleteTask, updateTask }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8000/api/get');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [data]);

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Gestión de <b>Tareas</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                                    <i className="material-icons">&#xE147;</i> <span>Añadir Nueva Tarea</span>
                                </a>
                            </div>
                        </div>
                    </div>
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
                            {data.tasks?.map((elem, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td>{elem.name}</td>
                                    <td>{elem.task}</td>
                                    <td>{elem.date}</td>
                                    <td>{elem.description}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editTaskModal" onClick={() => updateTask(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Editar">&#xE254;</i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteTaskModal" onClick={() => deleteTask(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Eliminar">&#xE872;</i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
