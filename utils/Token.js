const jsonwebtoken = require('jsonwebtoken');

const { TOKEN_KEY } = process.env;

const Token = {
    set(id) {
        return jsonwebtoken.sign({ id }, TOKEN_KEY);
    },
};

module.exports = Token;
