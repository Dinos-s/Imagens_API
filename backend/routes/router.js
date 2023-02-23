const router = require('express').Router();

// rotas de serviço
const serviceRouter = require('./services')
router.use('/', serviceRouter)

// rotas da festa
const partyRouter = require('./parties')
router.use('/', partyRouter)

module.exports = router