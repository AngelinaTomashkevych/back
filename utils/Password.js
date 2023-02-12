const { hashSync, genSaltSync, compareSync } = require('bcryptjs');

const Password = {
    set(password) {
        return hashSync(password, genSaltSync(10));
    },
    compare: (a, b = 0) => compareSync(a, b),
};

module.exports = Password;
