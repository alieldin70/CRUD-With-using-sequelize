const usermodel = require("../../../DB/Model/User");
const { Op } = require('sequelize');
const getusers = async(req, res) => {
    try {
        const findusers = await usermodel.findAll({
            where: {
                [Op.or]: [{
                    firstname: {
                        [Op.like]: `%a%`
                    }
                }, {
                    lastname: {
                        [Op.like]: `%a%`
                    }
                }]
            }
        });
        if (findusers.length > 0) {
            res.status(200).json({ message: "users", findusers });
        } else {
            res.status(400).json({ message: "users not exist" });

        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });

    }
}
module.exports = { getusers };