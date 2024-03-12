const router = require('express').Router();


router.get('/users/all', (req, res) => {
	res.send('respond with a resource');
});

router.post('/users/all', (req, res) => {
	res.send('respond with a resource');
});



module.exports = router;