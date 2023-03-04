const { UserModel } = require('../models');
const { Token, Password } = require('../utils');

const login = async (request, response) => {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email });

    const isValidPassword = user && Password.compare(password, user.password);

    if (!user || !isValidPassword) {
        response.status(404).json({ email: 'Wrong email or password' });
        return;
    }

    const { _id: id } = user;

    const { token } = await UserModel.findByIdAndUpdate(id, {
        token: Token.set(id),
    });

    response.status(200).json({ token, id, isAuth: true });
};

const registration = async (request, response) => {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email });

    if (user) {
        response.status(409).json({ email: 'Already account exist' });
        return;
    }

    const User = new UserModel({ email });
    const { _id: id } = User;

    User.setUserData(Password.set(password));
    User.setToken(Token.set(id));

    const { token } = await User.save();

    response.status(201).json({ token, id, isAuth: true });
};

const logout = async (request, response) => {
    const { id } = request.body;

    await UserModel.findByIdAndUpdate(id, { token: '' });

    response.status(200).json({});
};

const checkAuth = async (request, response) => {
    const { token } = request.cookies;

    const unAuthData = { id: null, isAuth: false };

    if (!token) {
        response.status(200).json(unAuthData);
        return;
    }

    const { id } = Token.verify(token);

    if (!id) {
        response.status(200).json(unAuthData);
        return;
    }

    response.status(200).json({ id, isAuth: true });
};

module.exports = { login, registration, logout, checkAuth };
