const express = require('express');
const router = express.Router();
const indexControllers = require ('../controllers/indexController.js')

/* GET home page. */
router.get('/',indexControllers.home);
router.get('/detalle/:id',indexControllers.detail);

module.exports = router;
