const dataModel = require('../models/model_user');

// Controller function to fetch data
const fetchData = async(req, res) => {
    try {
        const data = await dataModel.fetchData();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data', error);
        res.status(500).send('Error fetching data from database');
    }
};


const loginUser = async(req, res) => {
    const { username, password } = req.body;

    try {
        const userData = await dataModel.loginData(username, password);
        if (userData.length === 0) {
            return res.status(401).json({ message: `Invalid username or password` });
        } else {

            return res.status(200).json({ message: 'Login successful', userData });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// const loginUser = async(req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await userModel.loginData(username, password);

//         if (!user) {
//             // More specific error handling based on error message from userModel.loginData
//             if (error.message === 'User not found') {
//                 return res.status(404).send('User not found');
//             } else {
//                 return res.status(401).send('Invalid credentials'); // Adjust status code if appropriate
//             }
//         }

//         res.json(user);
//     } catch (error) {
//         console.error('Error logging in', error);
//         res.status(500).send('Internal server error'); // More specific message if possible
//     }
// };

module.exports = { fetchData, loginUser };