import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; 

import AddTask from './AddTask'; // Asegúrate de importar tu componente AddTask

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8000/api/get');
                setData(response.data.users || []); 
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleTaskAdded = (newTask) => {
        setData((prevData) => [...prevData, newTask]); // Agrega la nueva tarea al estado
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Nueva <b>Tarea</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addtask">
                                    <i className="material-icons">&#xE147;</i> <span>Agregar Nueva Tarea</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Modal para agregar nueva tarea */}
                    <AddTask onTaskAdded={handleTaskAdded} /> {/* Pasa la función aquí */}

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
                            {data.map((elem) => (
                                <tr key={elem._id}>
                                    <td></td>
                                    <td>{elem.name}</td>
                                    <td>{elem.task}</td>
                                    <td>{elem.date}</td>
                                    <td>{elem.description}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editTask" onClick={() => UpdatedUser(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteTask" onClick={() => Deletuser(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i>
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
