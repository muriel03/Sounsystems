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

   /* CategoryProduct.associate = function(models){ 
        CategoryProduct.hasMany(models.Product,{
            as: "products",
            foreingKey: "idcategorysProducts"
        })
    }*/

    return Category;
};