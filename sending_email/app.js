const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./email');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('hello world') )

app.post('/request-service', (req, res) => {
    console.log(req.body);
    let text = `${req.body.firstname} requested a service`;
    sendMail('adhoadhigal@gmail.com','Service Request', text);
    res.send('success full');
} )

app.listen(3000, ()=> console.log('Example app listening on port 3000')  )