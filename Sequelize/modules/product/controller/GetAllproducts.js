const blogmodel = require("../../../DB/Model/Product")
const usermodel = require("../../../DB/Model/User")
const getproductwinfo = async(req, res) => {
    try {
        const products = await blogmodel.findAll({
            include: [{
                model: usermodel,
                attributes: ["firstname", "lastname", "email"]
            }],

        });
        res.status(200).json({ message: "prodcuts", products });
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { getproductwinfo };