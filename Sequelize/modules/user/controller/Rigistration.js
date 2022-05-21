const usermodel = require("../../../DB/Model/User");
const sign_up = async(req, res) => {
    try {
        const { firstname, lastname, phone, age, email, cpassword, password } = req.body;
        if (password === cpassword) {
            const finduser = await usermodel.findAll({
                attributes: ['email'],
                where: {
                    email
                }
            });
            if (finduser.length > 0) {
                res.status(400).json({ message: "exist user", finduser });
            } else {
                const user = await usermodel.create({ firstname, lastname, phone, age, email, password });
                res.status(201).json({ message: "Done", user });
            }
        } else {
            res.status(400).json({ message: "password and cpassword mismatch" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });

    }

}
const sign_in = async(req, res) => {
    try {
        const { password, email } = req.body;
        const finduser = await usermodel.findAll({
            attributes: ['firstname', 'lastname', 'email', 'id'],
            where: {
                email,
                password
            }
        });
        if (finduser.length > 0) {
            res.status(200).json({ message: "Login", finduser });
        } else {
            res.status(400).json({ message: "In-valid mail and password" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });
    }
}
module.exports = { sign_in, sign_up };