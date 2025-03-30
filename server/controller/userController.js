import User from "../schema/User";
import bcrypt from "bcrypt";

// User Sign Up
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        //check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists" });

        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crate new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.log("error in signup", error)
        res.status(500).json({ error: error.message })
    }
}

// User Login
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Find user by id 
        const user = await User.findOne({email});
        if(!user) 
            return res.status(404).json({message: "User not found"});

        // Validting password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!password)
            return res.status(400).json({message: "Invalid password"});

        res.status(200).json({message: "Login successful", user});
    } catch (error) {
        console.log("error in login", error)
        res.status(500).json({ error: error.message });
    }
}