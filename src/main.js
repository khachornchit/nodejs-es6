const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const port = 3031;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
    .connect(
        'mongodb://mongo:27017/docker-node-mongo',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected Successfully !'))
    .catch(err => console.log(err));

const Item = require('./Models/Item');

app.get('/', (req, res) => {
    Item.find()
        .then(items => res.render('index', { items }))
        .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.redirect('/'));
});

app.listen(port, () => console.log('Server running ...'));