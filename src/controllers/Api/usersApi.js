const db = require('../../../database/models');

const getUser = (req, res) => {
    db.User.findAll()
        .then((user) => {
            res.status(200).json({
                count: user.length,
                user: user.map( item => {
                    return {
                        id: item.id,
                        name: item.fullName,
                        email: item.email,
                        avatar: item.avatar,
                        detail: `http://localhost:3030/api/users/${item.id}`
                    }
                })
            });
        });
}

const getUserById = (req, res) => {
    let id = req.params.id;
    db.User.findByPk(id)
        .then(user => {
            res.status(200).json({
                user: {
                    id: user.id,
                    name: user.fullName,
                    email: user.email,
                    avatar: `http://localhost:3030/images/avatar/${user.avatar}`
                }
            });
        })
}



module.exports = {getUser, getUserById};