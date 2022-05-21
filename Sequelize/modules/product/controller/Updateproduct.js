const blogmodel = require("../../../DB/Model/Product");
const updateblog = async(req, res) => {
    try {
        const { id } = req.params;
        const { descirption, title, price, userId } = req.body;
        const updated = await blogmodel.update({ descirption, title, price }, {
            where: {
                id,
                userId
            }
        });
        if (updated == 1) {
            res.status(200).json({ message: "updated", updated });
        } else {
            res.status(400).json({ message: "invalid id" });
        }

    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }

}
module.exports = { updateblog };