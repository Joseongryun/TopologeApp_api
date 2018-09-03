const express = require('express');
const router = express.Router();
const path_controller = require('../controller/pathController')

router.get('/', path_controller.get_path_list);

router.post('/', path_controller.add_path);

router.delete('/:id', path_controller.delete_path);

router.put('/:id', path_controller.edit_path);

module.exports = router;