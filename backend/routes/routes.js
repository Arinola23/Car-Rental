const express = require('express');
const router = express.Router();
const {setHirer, getAllHirers, updateHirer,getOneHirer, deleteHirer} = require('../controllers/userCredentialControllers')

router.post('/', setHirer)
router.get('/', getAllHirers)
router.get('/:id', getOneHirer)
router.put('/:id', updateHirer )
router.delete('/:id', deleteHirer)

module.exports = router;