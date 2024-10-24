import React, { useState } from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {



    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>task</label>
                                    <input type="text" value={value.task} name='task' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>date</label>
                                    <input type="text" value={value.date} name='date' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>description</label>

                                    <input type="text" value={value.desciption} name='desciption' onChange={handlechange} className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
