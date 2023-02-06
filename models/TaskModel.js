const { Schema, model } = require('mongoose');

const { SYMBOL_LENGTH } = require('../constants/schema');

const schema = Schema({
    title: {
        type: String,
        required: true,
        minlength: SYMBOL_LENGTH.TASK_MIN,
        maxlength: SYMBOL_LENGTH.TASK_TITLE,
    },
    description: {
        type: String,
        required: true,
        minlength: SYMBOL_LENGTH.TASK_MIN,
        maxlength: SYMBOL_LENGTH.TASK_DESCRIPTION,
    },
});

const TaskModel = model('task', schema);

module.exports = { TaskModel };
