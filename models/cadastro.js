const Sequelize = require(`sequelize`);
const db = require(`../db/connection`);

const Cadastro = db.define(`registers`, {
    name: {
        type: Sequelize.STRING,
    },
    number: {
        type: Sequelize.STRING,
    }
});

module.exports = Cadastro