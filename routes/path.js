const express = require('express');
const router = express.Router();
const path_controller = require('../controller/pathController')

router.get('/maps/:m_id', path_controller.get_path_list);

router.post('/', path_controller.add_path);

router.delete('/:p_id', path_controller.delete_path);

// router.delete('/nodes/:n_id', path_controller.delete_path_node);

router.get('/:p_id', path_controller.get_path);

router.put('/design/:p_id', path_controller.edit_path_design);

module.exports = router;