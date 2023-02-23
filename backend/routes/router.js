const router = require('express').Router();

// rotas de serviço
const serviceRouter = require('./services')
router.use('/', serviceRouter)

module.exports = router