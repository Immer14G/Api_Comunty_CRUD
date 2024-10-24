import React from 'react';

export default function DeleteTask({ handleUserDelet }) {
    return (
        <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h4 className="modal-title">Eliminar Tarea</h4>
                        </div>
                        <div className="modal-body">
                            <p>¿Está seguro de que desea eliminar estos registros?</p>
                            <p className="text-warning"><small>Esta acción no se puede deshacer.</small></p>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancelar" />
                            <input type="button" className="btn btn-danger" value="Eliminar" data-bs-dismiss="modal" onClick={handleUserDelet} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
