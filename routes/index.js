var express = require('express');
var router = express.Router();

const map = require('./map');
const node = require('./node');
const path = require('./path');

router.use("/maps", map);
router.use("/nodes", node);
router.use("/paths", path);

module.exports = router;
