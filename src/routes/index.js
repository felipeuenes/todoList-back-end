const { Router } = require('express')
const router = Router();
const controllers = require('../controllers')
const controllersConcluidos = require('../controllers/concluidos')

router.get('/', controllers.read)
router.post('/tarefa', controllers.create)
router.put('/tarefa/:id', controllers.update)
router.delete('/tarefa/:id', controllers.delete)

// outra tabela:

router.post('/concluir/:id', controllersConcluidos.create)
router.get('/concluidos', controllersConcluidos.read)
router.delete('/concluidos/del/:id', controllersConcluidos.delete)

module.exports = router;

