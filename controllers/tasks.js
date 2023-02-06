const { TaskModel } = require('../models');

const getTasks = async (request, response) => {
    const tasks = await TaskModel.find({});

    response.status(200).json(tasks);
};

module.exports = { getTasks };
