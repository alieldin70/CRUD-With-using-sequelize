const blogmodel = require("../../../DB/Model/Product")
const { Op } = require('sequelize');
const getproductsDprices = async(req, res) => {
    try {
        const productD = await blogmodel.findAll({
            where: {
                price: {
                    [Op.between]: [1000, 3000]
                }
            }
        });
        if (productD.length > 0) {
            res.status(200).json({ message: "done", productD });
        } else {
            res.status(400).json({ message: "not found" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { getproductsDprices };