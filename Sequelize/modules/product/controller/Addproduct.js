const blogmodel = require("../../../DB/Model/Product");

const addblog = async(req, res) => {
    try {
        const { descirption, title, price, userId } = req.body;
        const prodcut = await blogmodel.create({ descirption, title, price, userId });
        res.status(201).json({ message: "added product", prodcut });
    } catch (err) {
        res.status(400).json({ message: "catch error", error: err["name"] });
    }
}
module.exports = { addblog };