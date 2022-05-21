const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sequelized', process.env.admin, process.env.password, {
    host: process.env.HOST,
    dialect: 'mysql'
});
const drawtables = () => {
    return sequelize.sync({ alter: true }).then((result) => {
        console.log("connected", result);
    }).catch((err) => {
        console.log("fail", err);
    })
};
module.exports = { drawtables, sequelize };