const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const blogmodel = require('./Product');
const usermodel = sequelize.define('user', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        required: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        required: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});
usermodel.hasMany(blogmodel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
blogmodel.belongsTo(usermodel);
module.exports = usermodel;