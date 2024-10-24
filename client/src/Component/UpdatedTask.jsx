import React from 'react';

export default function UpdateTask({ handleOnSubmit, value, handleChange, isOpen, onClose }) {
  
    if (!value || !isOpen) {
        return null; 
    }

    return (
        <>
            <div
                id="editTaskModal"
                className={`modal fade ${isOpen ? 'show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
                aria-hidden={!isOpen}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Actualizar Tarea</h4>
                                <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        value={value.name || ''}
                                        name="name"
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tarea</label>
                                    <input
                                        type="text"
                                        value={value.task || ''}
                                        name="task"
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Fecha</label>
                                    <input
                                        type="date"
                                        value={value.date || ''}
                                        name="date"
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea
                                        value={value.description || ''}
                                        name="description"
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isOpen && <div className="modal-backdrop fade show"></div>} {/* Fondo del modal */}
        </>
    );
}
