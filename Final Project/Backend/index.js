const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const usersRoute = require('./routes/users')
const getListingRoute = require('./routes/getListing')
const store = new session.MemoryStore();
const app = express();

app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));

app.use(session({
    secret: 'test',
    cookie: { maxAge: 30000},
    saveUninitialized: false,
    store
}))

app.use((req, res, next) => {
    console.log(store);
    console.log(`${req.method} - ${req.url}`);
    next();
});

const PORT = process.env.PORT || 3000;

app.use('/users', usersRoute);
app.use('/getListing', getListingRoute);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
}); 

// const listings = [
//     {house: 'Red House'},
//     {house: 'Blue House'}
// ]

// app.get("/", (req, res) => {
//     res.send(200);
// });

// app.post("/", (req,res) => {
//     console.log(req.body);
//     res.status(201).send('Created User')
// })

// function validateAuthToken(req, res, next) {
//     console.log('In validateAuthToken');
//     const { authorization } = req.headers;
//     if(authorization && authorization === '123') {
//         next();
//     } else {
//         res.status(403).send({ msg: 'Forbidden. Incorrect Credentials'});
//     }
// }

// app.post('/getListing', validateAuthToken, (req, res) => {
//     const listing = req.body;
//     listings.push(listing);
//     res.status(201).send(listing);
// });

// function validateCookie(req, res, next) {
//     const { cookies } = req;
//     if ('sessionID' in cookies) {
//         console.log('Session ID Exists.');
//         if (cookies.sessionID === '123456') {
//             next();
//         } else {
//             res.status(403).send({ msg: 'Not Authorized' });
//         }
//     } else {
//         res.status(403).send({msg: 'Not Authorized' });
//     }
    
//     next();
// }

// app.get('/signin', (req, res) => {
//     res.cookie('sessionID', '123456');
//     res.status(200).json({msg: 'Logged In'});
// })

// app.get('/protected', validateCookie, (req, res) => {
//     res.status(200).json({msg: 'You are authorized!'});
// })

// app.post('/login', (req, res) =>{
//     const { username, password } = req.body;
//     if (username && password) {
//         if (req.session.authenticated) {
//             res.json(req.session);
//         } else {
//             if (password === '123') {
//                 req.session.authenticated = true;
//                 req.session.user = { username, password };
//                 res.json(req.session);
//             } else {
//                 res.status(403).json({ msg: 'Bad Credentials' });
//             }
//         }
//     } else res.status(403).json({ msg: 'Bad Credentials' });
//     res.send(200);
// })

