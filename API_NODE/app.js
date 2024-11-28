let express = require('express');
let app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const routes = require("./modules/routes")(app, router);
const PORT = process.env.PORT || 5010; 
let mongoose = require("mongoose");
let passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const AccountSchema = require("./models/account.scheme");
const session = require('express-session');
const dotenv = require('dotenv').config();
let errorHandler = require("./middlewares/errorHandler.middleware");
const MkdirFolders = require('./utils/global.utils').MkdirFolders;

let uri = "mongodb://localhost:27017/undefined";

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected Db");
    } catch (error) {
        console.log(error);
    }
}

app.secret = process.env.SECRET;

passport.use(new LocalStrategy(AccountSchema.authenticate()));
passport.serializeUser(AccountSchema.serializeUser());
passport.deserializeUser(AccountSchema.deserializeUser());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: false ,
    saveUninitialized: true ,
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('showStackError', true);
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use(express["static"](__dirname + "/public/client"));
//Para hacer redireccionamiento al front y no al back cuando el navegador se haga refresh (Prod)
app.get('/app/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/client/index.html'))
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/client/index.html'))
});
app.use(errorHandler.errorHandler);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

connectDb();
MkdirFolders();
module.exports = app;