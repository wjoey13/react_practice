const express = require('express');
const app = express();
const port = process.env.PORT || 30313;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

app.listen(port, () => {
    console.log(`wanna know what port is active? It's port ${port}`);
});

app.get('/', (req, res, next) =>   {
})