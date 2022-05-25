module.exports = (sequelize, DataTypes)=>{
    let alias = "Brand";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autotIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    };

    let config = {
        tableName: "brand",
        timesTamps: false,
        createdAt: false,
        updatedAt: false,
    };

    const Brand = sequelize.define(alias, cols, config);

    return Brand;
};
