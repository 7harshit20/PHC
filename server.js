const express = require('express');
const db = require('./db');
const app = express();
db();
app.use(express.json())
app.use('/api/register', require('./route/register'));
app.use('/api/auth', require('./route/auth'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));