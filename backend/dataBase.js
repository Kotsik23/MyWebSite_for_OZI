const { Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('books', 'postgres', 'Kotsik23', {
    host: 'localhost',
    dialect: 'postgres',
});

try {
    sequelize.authenticate();
    console.log('Connection success');
} catch (error) {
    console.log('Error', error);
}


class User extends Model {}
User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
}, { sequelize, modelName: 'user' });

(async () => {
    await sequelize.sync();
})();


const createUser = async (name, email, password) => User.create({
        name,
        email,
        password,
    });

const getUser = async (id) => User.findByPk(id);

const getUserByEmail = async (email) => User.findOne({where: { email: email }});

module.exports = { createUser, getUser, getUserByEmail };