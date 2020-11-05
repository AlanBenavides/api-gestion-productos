const { Router } = require('express');
const router = Router()

const { GET, SHOW, POST, PUT, DELETE } = require('./controllers')

/*router.get('/images', GET)*/
router.get('/images/:id', SHOW)
router.post('/images', POST)
router.put('/images/:id', PUT)
router.delete('/images/:id', DELETE)
module.exports = router