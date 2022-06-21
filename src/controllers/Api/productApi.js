const db = require('../../../database/models');

const getCategory = async (categories) => {
    let count = [];
    let cuantity = 0;
    for( i=0; i < categories.length; i++ ){
        cuantity = await db.Product.count(({
            where:{
                category_id: categories[i].id
            }
        }));
        count.push({
            id: categories[i].id,
            name: categories[i].name,
            cuantity: cuantity
        });
    }
    return count;
}

const getProduct = async (req, res) => {
    let category = await db.Category.findAll();
    db.Product.findAll()
        .then( async product => {
            res.send({
                count: product.length,
                countByCategory: await getCategory(category),
                product
        });
    })
}

const getProductById = (req, res)=>{
    let id = req.params.id
    db.Product.findByPk(id)
        .then((product)=>{
            res.status(200).json({
                product/* : {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    img: `http://localhost:3030/images/${product.img}`,
                    price: product.price,
                    discount: product.discount,
                    category: product.category_id,
                    brand: product.brand_id
                } */,
                img_url: `http://localhost:3030/images/${product.img}`
            })
        })
}

module.exports = {getProduct, getProductById};