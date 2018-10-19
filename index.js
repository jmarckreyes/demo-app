const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req,res) => {
    const obj = {
        'greetings' : 'Hello ${name}'
    }
    res.send(obj);
});

app.post('/', (req,res) => {
    const name = req.body.name;
    const obj = {
        'greetings' : 'Hello '+ name
    }
    res.send(obj); 
});

app.listen(port,()=> {
    console.log('Running at port 3000');
});
