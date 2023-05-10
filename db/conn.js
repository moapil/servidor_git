const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('servidor_git', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('conexao pica parabens viu rs')
// }).catch((err)=>{
//     console.log('falhou linda foi mal')
// })

module.exports = sequelize