const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Client