const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
const mongoDB = require('./config/DB');
const app = express();
const cors = require('cors');
mongoDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('hei');

});
app.use('/api/user', userRoutes);
app.use('/api/data', dataRoutes);