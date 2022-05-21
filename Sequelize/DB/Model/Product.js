const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const blogmodel = sequelize.define('blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    descirption: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});
module.exports = blogmodel;