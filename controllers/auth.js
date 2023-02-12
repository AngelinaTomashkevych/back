const { UserModel } = require('../models');
const { Token, Password } = require('../utils');

const login = async (request, response) => {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email });

    const isValidPassword = user && Password.compare(password, user.password);

    if (!user || !isValidPassword) {
        response.status(404).json({ message: 'Wrong email or password' });
        return;
    }

    const { _id: id } = user;

    const data = await UserModel.findByIdAndUpdate(id, {
        token: Token.set(id),
    });

    response.status(200).json(data);
};

const registration = async (request, response) => {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email });

    if (user) {
        response.status(409).json({ message: 'Already account exist' });
        return;
    }

    const User = new UserModel({ email });
    const { _id: id } = User;

    User.setUserData(Password.set(password));
    User.setToken(Token.set(id));

    const data = await User.save();

    response.status(201).json(data);
};

const logout = async (request, response) => {
    const { id } = request.body;

    await UserModel.findByIdAndUpdate(id, { token: '' });

    response.status(200).json({});
};

module.exports = { login, registration, logout };
