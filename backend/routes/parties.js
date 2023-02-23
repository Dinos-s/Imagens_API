const router = require('express').Router();
const partyController = require('../controllers/partyController')

router.route('/party').post((req, res) => {
    partyController.create(req, res)
})

router.route('/party').get((req, res) => {
    partyController.getAll(req, res)
})

router.route('/party/:id').get((req, res) => {
    partyController.getID(req, res)
})

router.route('/party/:id').put((req, res) => {
    partyController.update(req, res)
})

router.route('/party/:id').delete((req, res) => {
    partyController.delete(req, res)
})

module.exports = router;