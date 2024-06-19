import User from "../models/user.modal.js"
import bcrpt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

// Controller to signup a user
export const signup = async (req, res, next) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be atleast 6 characters long" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hashing password
        const hashedPassword = await bcrpt.hash(password, 10);

        // api to get the profile picture for the user
        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePicture : girlProfilePicture
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else{
            return res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in sign in", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrpt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in log in", error.message);
        res.status(500).json({ error: "Internal server error" });   
    }
}

export const logout = (req, res, next) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout", error.message);
        res.status(500).json({ error: "Internal server error" });   
    }
}
