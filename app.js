const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/route_users');

const app = express();
const port = process.env.PORT || 3000;
const ipAddress = getIPAddress();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api', dataRoutes);

// Define routes
app.get('/', (req, res) => {
    res.render('index', { ipAddress, port });
});

app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main', 'main.html'));
});

// Start the server
app.listen(port, ipAddress, () => {
    console.log(`Server is running on http://${ipAddress}:${port}`);
});

// Function to get IP Address
function getIPAddress() {
    const networkInterfaces = os.networkInterfaces();
    const wifiInterface = networkInterfaces['Wi-Fi']; // Assuming the interface is named "Wi-Fi"
    return wifiInterface ? wifiInterface.find(details => details.family === 'IPv4').address : '127.0.0.1';
}