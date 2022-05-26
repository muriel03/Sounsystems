module.exports = (sequelize, DataTypes)=>{
    let alias = "Category";

    let cols ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    };

    let congif = {
        tableName: "category",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const Category = sequelize.define(alias, cols, congif);

    /* Category.associate = function(models){
        Category.hasMany(models.Product,{
            as: "Product",
            foreingKey: "category_id"
        })
    } */

    return Category;
};