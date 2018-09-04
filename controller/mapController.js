const map = require('../models').db.map;
const err = require('../config/error.config');

exports.get_map_list = (req, res) => {
  map.findAll({
    attributes: ['m_id', 'm_name', 'm_image']
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.add_map = (req, res) => {
  var m_name = req.body.m_name;
  var m_image = req.file.filename;
  if (m_name == undefined || req.file == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  map.create({
    m_name,
    m_image
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error)
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.delete_map = (req, res) => {
  var m_id = req.params.m_id;
  if (m_id == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  map.destroy({
    where: {
      m_id
    }
  }).then((result) => {
    if (result == 0) {
      res.status(400).send(err.NotExist);
      return;
    }
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.get_map = (req, res) => {
  var m_id = req.params.m_id;
  if (m_id == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  map.findOne({
    where: {
      m_id
    }
  }).then((result) => {
    if (result == null || result == "") {
      res.status(400).send(err.NotExist);
      return;
    }
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error)
    res.status(400).send(err.ProcessErr);
    return;
  })
}