const usermodel = require("../../../DB/Model/User");
const updateuser = async(req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, age } = req.body;
        const userupdated = await usermodel.update({ firstname, lastname, age }, {
            where: {
                id
            }
        });
        if (userupdated[0] == 1) {
            res.status(200).json({ message: "updated user", userupdated });
        } else {
            res.status(400).json({ message: "in-valid id", id });

        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { updateuser };