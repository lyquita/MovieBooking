const Sequelize = require('sequelize')


module.exports = new Sequelize('fimo', 'root', 'root',{
    host:'localhost',
    dialect: 'postgresql'
})

