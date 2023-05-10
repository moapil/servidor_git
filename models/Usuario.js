const{ DataTypes } = require('sequelize')
const db  = require('../db/conn')

const Usuario = db.define('usuarios', {
    nome: {
        type: DataTypes.STRING(30),
    },
    idade: {
        type: DataTypes.INTEGER(3),
    }

},{
    createdAt: false,
    updatedAt: false,

})

// Usuario.sync({force:true})

module.exports = Usuario