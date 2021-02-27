const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
dotEnv.config();

const connection = require('./database/connections')
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
connection();
const route = require('./routes/User')
app.use('/api/v1', route);
app.listen(process.env.PORT, () => {
    console.log('server is listening');
}); 