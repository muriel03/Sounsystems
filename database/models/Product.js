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
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount:{
            type: DataTypes.DECIMAL
        },
        categoryProduct_id:{
            type: DataTypes.INTEGER
        },
        brand_id:{
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "product",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=>{
        Product.belongsTo(models.CategoryProduct,{
            as: "categoryProduct",
            foreignKey: "categoryProduct_id"
        })
    }

    return Product;

}
