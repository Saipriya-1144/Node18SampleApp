const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Hello endpoint called!');
    res.send('Hello from NodeJs App, HIIIIII!')
})

app.get('/dummy', (req, res) => {
    console.log('Dummy endpoint called!');
    var s = process.env.DUMMY_APPSETTING || "Appsetting not Found";
    res.send(s)
})

app.get('/placeholder', (req, res) => {
    console.log('Placeholder endpoint called!');
    res.send('6d9f9cbe-d228-4d95-8ef3-9081a87b1964');
})

app.listen(port, () => console.log('Listening on port %s', port));