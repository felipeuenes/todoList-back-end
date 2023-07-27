const { Router } = require('express')
const router = Router();
const controllers = require('../controllers')


router.get('/', (req, res) => {
    res.send('teste de get')
})

router.post('/tarefa', controllers.create)


module.exports = router;