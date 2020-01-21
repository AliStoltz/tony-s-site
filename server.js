const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-comgo')(session);
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


// --------- MIDDLEWARE ------- //


//cors
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//express-sessions
app.use(session({
  sotre: new MongoStore({ url: process.env.MONGO_URI }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
  }
}));


// ------ ROUTES ------ //
app.get('/', (req, res) => {
  res.send('<h1>CTEnterprises</h1>');
});

app.use('/api/v1/auth', routes.auth);
app.use('api/v1/users', routes.users);
app.use('/api/v1/products', routes.products);
app.use('/api/v1/cart', routes.cart);

app.listen(PORT, () => console.log(`server connected at ${PORT}`));