import usermodel from "../models/User.js"

// Crear nueva tarea
const create = async (req, res) => {
  try {
    const { name, task, date, description } = req.body;
    const NewTask = new usermodel({
      name,
      task,
      date,
      description
    });
    await NewTask.save();
    res.status(200).json({ success: true, message: "Task Created Successfully.", NewTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Obtener todas las tareas
const get = async (req, res) => {
  try {
    const tasks = await usermodel.find();
    if (!tasks) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

// Actualizar una tarea
const Updated = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await usermodel.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json({ success: true, message: 'Task updated successfully', updatedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Eliminar una tarea
const Delete = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await usermodel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { create, get, Updated, Delete };

