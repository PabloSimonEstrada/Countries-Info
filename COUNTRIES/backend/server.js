const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001; // You can change the port if necessary
app.use(cors());
// GET route to fetch country information by name
app.get('/country/:name', async (req, res) => {
    const countryName = req.params.name;
    try {
        // Make the request to the REST Countries API
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);

        // Send the obtained data as a response
        res.json(response.data);
    } catch (error) {
        // Error handling for the API request
        if (error.response) {
            // REST Countries API returned an error
            res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            res.status(500).send({ message: 'No response from the REST Countries API' });
        } else {
            // Error in setting up the request
            res.status(500).send({ message: 'Error making request to the API' });
        }
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});