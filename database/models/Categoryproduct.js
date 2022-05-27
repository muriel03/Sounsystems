module.exports = (sequelize, DataTypes)=>{
    let alias = "CategoryProduct";

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
        tableName: "categoryProduct",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const CategoryProduct = sequelize.define(alias, cols, congif);

    CategoryProduct.associate = (models)=>{
        CategoryProduct.hasMany(models.Product, {
            as: "product",
            foreignKey: "category_id"
        })
    }

    return CategoryProduct;
};