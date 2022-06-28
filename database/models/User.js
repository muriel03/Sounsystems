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
            
        },
        typeuser_id:{
            type: DataTypes.INTEGER,
        }

    };

    let config = {
        tableName: "user",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
        mapToModel: true
    };

    const User = sequelize.define(alias, cols, config);

    /*User.associate = function(models){
        User.belongsTo(models.TypeUser,{
            as:"typeUser",
            foreingKey: "typeuser_id"
        });

    }*/
    return User;
};