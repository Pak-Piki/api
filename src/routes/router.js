const express = require('express');
const Controller = require('../controllers/controller');
const myMiddleware = require('../middleware/middleware');

const router = express.Router();

router.use('/api', Controller.helloWorld);
router.use('/boskuh', myMiddleware.myMiddleware, Controller.helloBoskuh);

module.exports = router;
