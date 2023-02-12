const { Schema, model } = require('mongoose');

const schema = Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    created: {
        type: Number,
    },
});

schema.method({
    setDate: function () {
        this.created = new Date().getTime();
    },
    setToken: function (token) {
        this.token = token;
    },
    setUserData: function (password) {
        this.password = password;
        this.setDate();
    },
});

const UserModel = model('user', schema);

module.exports = UserModel;
