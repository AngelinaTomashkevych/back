const jsonwebtoken = require('jsonwebtoken');

const { TOKEN_KEY } = process.env;

const Token = {
    set(id) {
        return jsonwebtoken.sign({ id }, TOKEN_KEY);
    },
    verify(token) {
        try {
            return jsonwebtoken.verify(token, TOKEN_KEY);
        } catch (error) {
            return { id: null };
        }
    },
};

module.exports = Token;
