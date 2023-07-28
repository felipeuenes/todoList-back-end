const { Router } = require('express')
const router = Router();
const controllers = require('../controllers')

router.get('/', controllers.read)
router.post('/tarefa', controllers.create)
router.put('/tarefa/:id', controllers.update)
router.delete('/tarefa/:id', controllers.delete)

module.exports = router;