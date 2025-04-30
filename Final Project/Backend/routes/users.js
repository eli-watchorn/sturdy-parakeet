const { Router } = require('express');
const db = require('../database')
const router = Router();

router.use((req, res, next) => {
    console.log('Request made to /USER route');
    next();
})

router.get('/', async (req, res) => {

    const results = await db.promise().query(`SELECT * FROM ACCOUNTS`);
    console.log(results[0])

    res.status(200).send(results[0]);
});

router.post('/', (req, res) =>{
    const { username, password } = req.body;
    if (username && password) {
        try {
            db.promise().query(`INSERT INTO ACCOUNTS VALUES('2', 'test', 'test', '${username}', '${password}', 'test', NULL)`);
            res.status(201).send({ msg: 'Created User'})
        }
        catch (err) {
            console.log(err);
        }
        
    }
})

module.exports = router;
