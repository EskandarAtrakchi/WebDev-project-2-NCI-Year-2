const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use cors middleware

// Listings endpoint
app.get('/listings', async (req, res) => {
    try {
        const response = await axios.get('https://api.alternative.me/v2/listings/');
        const responseData = response.data;

        res.json(responseData.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error.message);
        res.status(500).json({ error: 'Error fetching data from external API' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
