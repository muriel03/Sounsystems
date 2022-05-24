module.exports = (sequelize, DataTypes)=>{
    let alias = "Product";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            auntIncrement: true,
        },
        name: {
            type: {
                type: DataTypes.STRING,
            }
        },
        description:{
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        discount: {
            type: DataTypes.DECIMAL,
        },
        category_id:{
            type: DataTypes.INTEGER,
        },
        brand_id:{
            type: DataTypes.INTEGER,
        }
    }
    
    config = {

    }
    
    const Product = sequelize.define(alias, cols, config);

    return Product;

};