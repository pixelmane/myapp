const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Fuckers')
});

app.listen(port, () => {
    console.log(`DataFucker app is listening on port ${port}`)
});

