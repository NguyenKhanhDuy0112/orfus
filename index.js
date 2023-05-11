// Import packages
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require("express");

const home = require("./routes/home");

const app = express();
app.use(express.json());

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '30mb' }));

// const corsOptions = {
//     origin: true,
//     credentials: true,
// };

// app.use(cors(corsOptions));
dotenv.config();
// Middlewares


// Routes
app.use("/api/v1", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
