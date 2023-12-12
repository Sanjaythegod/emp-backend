module.exports = (sequelize, type) => {
    const Product = sequelize.define('Users', {
        id: {
            type: type.STRING,
            primaryKey: true,
        },
        name: type.STRING,
        description: type.TEXT,
        price: type.INTEGER,
        quantity: type.INTEGER,


    }, {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });

    return Product;
};

