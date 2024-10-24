import React, { useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddTask() {
    const [value, setValue] = useState({
        name: '',
        task: '',
        date: '',
        description: ''
    });

    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const CloseRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const addTask = await axios.post('http://localhost:8000/api/create', value);
            const response = addTask.data;
            if (response.success) {
                toast.success(response.Message);
                CloseRef.current.click();
            }
        } catch (error) {
            console.log(error);
            toast.error('Error al agregar la tarea.');
        }
    };

    return (
        <>
            <div id="addTaskModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Agregar Tarea</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" value={value.name} name="name" onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Tarea</label>
                                    <input type="text" value={value.task} name="task" onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Fecha</label>
                                    <input type="date" value={value.date} name="date" onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea value={value.description} name="description" onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancelar" />
                                <input type="submit" className="btn btn-primary" value="Agregar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
