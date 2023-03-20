const { TaskModel } = require('../models');
const { Token } = require('../utils');

const getTasks = async (request, response) => {
    const {
        cookies: { token },
    } = request;

    const { id } = Token.verify(token);

    const tasks = await TaskModel.find({ owner: id });

    const resposeTasks = tasks.map((task) => ({
        title: task.title,
        description: task.description,
        complited: task.complited,
        id: task._id,
    }));

    response.status(200).json(resposeTasks);
};

const addTask = async (request, response) => {
    const {
        body,
        cookies: { token },
    } = request;

    const { id } = Token.verify(token);
    const Task = new TaskModel({ ...body, owner: id });

    await Task.save();

    response.status(201).json({});
};

module.exports = {
    getTasks,
    addTask,
};
