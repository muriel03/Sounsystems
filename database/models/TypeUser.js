module.exports = (sequelize, DataTypes) => {
    let alias = "TypeUser";
    let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    };

    let config = {
    tableName: "typeUser",
    timesTamps: false,
    createdAt: false,
    updatedAt: false,
    };

    const TypeUSer = sequelize.define(alias, cols, config);

    return TypeUSer;
};
