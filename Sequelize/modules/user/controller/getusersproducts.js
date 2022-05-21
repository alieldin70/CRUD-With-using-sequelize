const blogmodel = require("../../../DB/Model/Product")
const usermodel = require("../../../DB/Model/User")

const getusersproduct = async(req, res) => {
    try {
        const users = await usermodel.findAll({
            include: [{
                model: blogmodel,
                attributes: ["title", "descirption", "price"]
            }],
            attributes: ["firstname", "lastname", "email"]
        })
        res.status(200).json({ message: "users", users });
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { getusersproduct };