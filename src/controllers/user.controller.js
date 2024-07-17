import { User } from "../models/User.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});

        return res.json({
            status: true,
            message: `User [${user._id}] logged in successfully`,
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.status(201).json({
            status: true,
            token: "token",
            message: `User [${user._id}] created successfully`,
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

export { login, signup };