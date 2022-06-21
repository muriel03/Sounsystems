module.exports = (sequialize, DataTypes) =>{
    let alias = "TypeUser";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING 
        }, 
    };

    let config = {
        tableName: "typeuser",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const TypeUser  = sequialize.define(alias, cols, config);

    /*TypeUser.asocciante = function(models){
        TypeUser.hasMany(models.User,{
            as: "user",
            foreingKey: "typeUser_id"
        })
    }*/

    return TypeUser;
}

