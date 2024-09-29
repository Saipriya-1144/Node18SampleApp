const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Hello endpoint called!');
    res.send('Hello from NodeJs App, HIIIIII helloooooo!')
})

app.get('/dummy', (req, res) => {
    console.log('Dummy endpoint called!');
    var s = process.env.DUMMY_APPSETTING || "Appsetting not Found";
    res.send(s)
})

app.get('/placeholder', (req, res) => {
    console.log('Placeholder endpoint called!');
    res.send('7666646d-34ac-409a-962c-990b62ea6600');
})

app.listen(port, () => console.log('Listening on port %s', port));