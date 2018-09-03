const express = require('express');
const router = express.Router();
const upload = require('../config/upload.config');
const map_controller = require('../controller/mapController')

router.get('/', map_controller.get_map_list)

router.post('/', upload.single('m_image'), map_controller.add_map);

router.delete('/:m_id', map_controller.delete_map);

router.get('/:m_id', map_controller.get_map);

module.exports = router;