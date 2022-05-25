module.exports = (sequelize, DataTypes)=>{
    let alias = "User";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            auntIncrement: true,
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: false
        },
        typeUser_id:{
            type: DataTypes.INTEGER,
        }

    };

    let config = {
        tableName: "user",
        timesTamps: false,
        createdAT: false,
        updatedAT: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;
};