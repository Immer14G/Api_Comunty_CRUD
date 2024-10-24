import React from 'react';

export default function UpdateTask({ handleOnSubmit, value, handleChange }) {
    return (
        <>
            <div id="editTaskModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Actualizar Tarea</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        value={value.name} 
                                        name="name" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tarea</label>
                                    <input 
                                        type="text" 
                                        value={value.task} 
                                        name="task" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Fecha</label>
                                    <input 
                                        type="date" 
                                        value={value.date} 
                                        name="date" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea 
                                        value={value.description} 
                                        name="description" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancelar" />
                                <input type="submit" className="btn btn-primary" value="Actualizar" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
