const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 6534);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// // routes
app.use('/api/new-btc-wallet',require('./rutes/new-wallet/bitcon.js'));
// app.use('/api/movies', require('./routes/movies'));
// app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});