import React from 'react';

export default function DeleteTask({ handleTaskDelete }) {
    return (
        <>
            <div id="deleteTaskModal" className="modal fade" tabIndex="-1" aria-labelledby="deleteTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteTaskModalLabel">Eliminar Tarea</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
                            <p className="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={handleTaskDelete} data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

