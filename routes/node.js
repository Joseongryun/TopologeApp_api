const express = require('express');
const router = express.Router();
const upload = require('../config/upload.config');
const node_controller = require('../controller/nodeController')

router.get('/maps/:m_id', node_controller.get_node_list);

router.post('/', upload.single('n_image'), node_controller.add_node);

router.delete('/:n_id', node_controller.delete_node);

router.get('/:n_id', node_controller.get_node);

router.put('/:n_id', node_controller.edit_node);

module.exports = router;