const usermodel = require("../../../DB/Model/User");

const deleteuser = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteduser = await usermodel.destroy({ where: { id } });
        if (deleteduser == 1) {
            res.status(200).json({ message: "deleted user", deleteduser });
        } else {
            res.status(200).json({ message: "in-valid id", id });

        }

    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { deleteuser };