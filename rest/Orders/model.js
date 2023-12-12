module.exports = (sequelize, type) => {
    const Order = sequelize.define('Users', {
        id: {
            type: type.STRING,
            primaryKey: true,
        },
        product_id: type.STRING,
        user_id: type.STRING,
        quantity: type.INTEGER,

    }, {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });

    return Order;
};

