const { Schema, model, Types } = require('mongoose');

const schema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    complited: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: Types.ObjectId,
        required: true,
    },
});

const TaskModel = model('task', schema);

module.exports = TaskModel;
