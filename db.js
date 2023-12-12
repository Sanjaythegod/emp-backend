const mysql = require('mysql')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//models
const UsersModel = require('./rest/Users/model')
const ProductsModel = require('./rest/Products/model')
const OrdersModel = require('./rest/Orders/model')





const db = mysql.createConnection({
    host: 'database-1.cpxfz0aupufi.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Smarathe!00',
    database: 'emp_database',
})

//connection using sequielize

const sequelize = new Sequelize(
    'emp_database',
    'admin',
    'Smarathe!00',
    {
        dialect: 'mysql',
        host: 'database-1.cpxfz0aupufi.us-east-1.rds.amazonaws.com',
        port: '3306',
        dialectOptions: { decimalNumbers: true },
        logging: false,
    }
);

const Users = UsersModel(sequelize, Sequelize);
const Products = ProductsModel(sequelize, Sequelize);
const Orders = OrdersModel(sequelize, Sequelize);


const Models = {
    Op,
    Users,
    Products,
    Orders,
    sequelize
};

const connection = {};



//handler for sequelize
module.exports = async () => {
    if (connection.isConnected) {
        console.log('=> Using existing connection.');
        return Models;
    }
    await sequelize.sync();
    await sequelize.authenticate();
    connection.isConnected = true;
    console.log('=> Created a new connection.');
    return Models;
};
/*
module.exports = async () => {
    db.connect(err => {
        if (err) {
            console.log('Connect to db error: ', err.message)
            return
        }
        console.log('db connected')
        return Models;
    })
}*/


