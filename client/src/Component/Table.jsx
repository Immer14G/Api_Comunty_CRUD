import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'; // Asegúrate de tener react-hot-toast instalado

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState([]);
    const [newTask, setNewTask] = useState({
        name: '',
        task: '',
        date: '',
        description: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8000/api/get');
                setData(response.data.users || []); // Asegúrate de que la propiedad 'users' exista
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []); // Cambiado a un arreglo vacío para evitar bucles

    const handleAddTask = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        try {
            const response = await axios.post('http://localhost:8000/api/create', newTask);
            setData([...data, response.data.Newuser]); // Agrega la nueva tarea a la lista
            setNewTask({ name: '', task: '', date: '', description: '' }); // Resetea el formulario
            toast.success('Tarea agregada correctamente.');
        } catch (error) {
            console.error('Error al agregar tarea:', error);
            toast.error('Error al agregar tarea.');
        }
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
                    <div className="modal fade" id="addtask" tabIndex="-1" role="dialog" aria-labelledby="addtaskLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addtaskLabel">Agregar Nueva Tarea</h5>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleAddTask}>
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input type="text" className="form-control" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Tarea</label>
                                            <input type="text" className="form-control" value={newTask.task} onChange={(e) => setNewTask({ ...newTask, task: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha</label>
                                            <input type="date" className="form-control" value={newTask.date} onChange={(e) => setNewTask({ ...newTask, date: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <textarea className="form-control" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
                                    </form>
                                </div>
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
                            {data.map((elem, index) => (
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

    

