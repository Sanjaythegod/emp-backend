module.exports = (sequelize, type) => {
    const User = sequelize.define('Users', {
        id: {
            type: type.STRING,
            primaryKey: true,
        },
        password_hash: type.STRING,
        first_name: type.STRING,
        last_name: type.STRING,
        email: type.STRING,
        line_1: type.STRING,
        line_2: type.STRING,
        city: type.STRING,
        state: type.STRING,
        country: type.STRING,
        zipcode: type.STRING,


    }, {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });

    return User;
};

