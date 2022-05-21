const usermodel = require("../../../DB/Model/User")
const { Op } = require('sequelize');
const getalla = async(req, res) => {
    try {
        const getall = await usermodel.findAll({
            where: {
                [Op.and]: [{
                    firstname: {
                        [Op.like]: `a%`
                    }
                }, {
                    age: {
                        [Op.gt]: 30
                    }
                }]
            }
        });
        if (getall.length > 0) {
            res.status(200).json({ message: "users", getall });
        } else {
            res.status(400).json({ message: "users not exist" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { getalla };