const blogmodel = require("../../../DB/Model/Product");
const deleteblog = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const deleted = await blogmodel.destroy({
            where: {
                id,
                userId
            }
        });
        if (deleted == 1) {
            res.status(200).json({ message: "deleted", deleted });
        } else {
            res.status(200).json({ message: "invalid id" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }


}
module.exports = { deleteblog };