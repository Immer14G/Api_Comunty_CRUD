import React from 'react';

export default function DeleteTask({ handleTaskDelete }) {
    return (
        <>
            <div id="deleteTaskModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Eliminar Tarea</h4>
                                {/* <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
                                <p className="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancelar" />
                                <input type="button" className="btn btn-danger" value="Eliminar" data-bs-dismiss="modal" onClick={handleTaskDelete} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

