const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./email');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('hello world') )

app.post('/request-service', (req, res) => {
    console.log(req.body);
    let text = `Hi,
    ${req.body.firstname} ${req.body.lastname} ,
    has booked ${req.body.labour} on,
     ${req.body.date} for ${req.body.duration},
      ${req.body.contact},
      ${req.body.location_id}`
    // let text = `${req.body.firstname} ${req.body.lastname} ${req.body.username} ${req.body.email} ${req.body.labour} ${req.body.duration} ${req.body.contact} ${req.body.location_id} requested a service`;
    sendMail('adhoadhigal@gmail.com','Service Request', text);
    res.send('success full');
} )

app.listen(3000, ()=> console.log('Example app listening on port 3000')  )