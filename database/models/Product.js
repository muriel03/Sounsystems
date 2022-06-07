module.exports = (sequelize, DataTypes)=>{
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncemental: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        img:{
            type: DataTypes.STRING(100)
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount:{
            type: DataTypes.DECIMAL
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brand_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "product",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const Product = sequelize.define(alias, cols, config);

    /* Product.associate = (models)=>{
        Product.belongsTo(models.Category,{
            as: "Category",
            foreignKey: "category_id"
        })
    } */

    return Product;

}
