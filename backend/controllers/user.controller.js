import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
    try {
        const userLoggedId = req.user._id;
        const users = await User.find({ _id: { $ne: userLoggedId } }).select("-password");

        res.status(200).json(users);
    } catch (error) {
        console.log("Error for get users ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}