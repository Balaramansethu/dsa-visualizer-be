const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('dotenv').config();

const bubblesort = require('./routes/bubblesortRouter');

app.use('/api/v1/bubblesort', bubblesort);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server started listening at port number "${PORT}"`);
});
