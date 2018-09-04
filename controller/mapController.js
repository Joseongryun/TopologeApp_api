var map = require('../models').db.map;

exports.get_map_list = (req, res) => {
  map.findAll({
    attributes: ['m_id', 'm_name', 'm_image']
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error");
    return;
  })
}

exports.add_map = (req, res) => {
  if (req.body.m_name == undefined || req.file == undefined) {
    res.status(400).send("Check Validation");
    return;
  }
  map.create({
    m_name: req.body.m_name,
    m_image: req.file.filename
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error)
    res.status(400).send("Process error");
    return;
  })
}

exports.delete_map = (req, res) => {
  if (req.params.m_id == undefined) {
    res.status(400).send("Check Validation");
    return;
  }
  map.destroy({
    where: {
      m_id: req.params.m_id
    }
  }).then((result) => {
    if (result == 0) {
      res.status(400).send("Not exist");
      return;
    }
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error");
    return;
  })
}

exports.get_map = (req, res) => {
  if (req.params.m_id == undefined) {
    res.status(400).send("Check Validation");
    return;
  }
  map.findOne({
    where: {
      m_id: req.params.m_id
    }
  }).then((result) => {
    if (result == null || result == "") {
      res.status(400).send('Not exist');
      return;
    }
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error)
    res.status(400).send("Process error");
    return;
  })
}