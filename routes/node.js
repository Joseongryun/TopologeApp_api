const express = require('express');
const router = express.Router();
const upload = require('../config/upload.config');
const node_controller = require('../controller/nodeController')

router.get('/maps/:m_id', node_controller.get_node_list);

router.post('/', upload.single('n_image'), node_controller.add_node);

router.delete('/:n_id', node_controller.delete_node);

router.get('/:n_id', node_controller.get_node);

router.get('/location/:n_id', node_controller.get_node_location)

router.put('/basic/:n_id', node_controller.edit_node_basic);

router.put('/location/:n_id', node_controller.edit_node_location);

router.put('/image/:n_id', upload.single('n_image'), node_controller.edit_node_image);



module.exports = router;