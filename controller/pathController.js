const model = require('../models').db;
const err = require('../config/error.config');
const Op = require('../models').Sequelize.Op;

exports.get_path_list = (req, res) => {
  var m_id = req.params.m_id;
  if (m_id == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  model.map.findOne({
    where: {
      m_id: m_id
    }
  }).then((map) => {
    if (map == null) {
      res.status(400).send(err.NotExist);
      return;
    }
    model.path.findAll({
      where: {
        m_id
      }
    }).then((result) => {
      res.status(200).json(result);
      return;
    }).catch((error) => {
      console.log(error);
      res.status(400).send(err.ProcessErr);
      return;
    })
  }).catch((error) => {
    res.status(400).send(err.ProcessErr)
    return;
  })
}

exports.add_path = (req, res) => {
  var m_id = req.body.m_id;
  var p_start = req.body.p_start;
  var p_end = req.body.p_end;
  var p_option = req.body.p_option;
  var p_color = req.body.p_color;
  if (m_id == undefined || p_start == undefined || p_end == undefined || p_option == undefined || p_color == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  var p_start_result;
  model.map.findOne({
    where: {
      m_id
    }
  }).then((result) => {
    if(result == null){
      res.status(400).send(err.NotExist);
    }
    next();
  })
  //let p_end_result = 
  //let m_id_result = 
  model.path.create({
    m_id,
    p_start,
    p_end,
    p_option,
    p_color
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.delete_path = (req, res) => {
  var p_id = req.params.p_id;
  if (p_id == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  model.path.destory({
    where: {
      p_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.delete_path_node = (req, res) => {
  var n_id = req.params.n_id;
  if (n_id == undefined) {
    res.status(400).send(err.CheckVal);
  }
  model.path.destory({
    where: {
      [Op.or]: [{
        p_start: n_id
      }, {
        p_end: n_id
      }]
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.get_path = (req, res) => {
  var p_id = req.params.p_id;
  if (p_id == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  model.path.findOne({
    where: {
      p_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}

exports.edit_path_design = (req, res) => {
  var p_id = req.params.p_id;
  var p_option = req.body.p_option;
  var p_color = req.body.p_color;

  if (p_id == undefined || p_option == undefined || p_color == undefined) {
    res.status(400).send(err.CheckVal);
    return;
  }
  model.path.update({
    p_option,
    p_color
  }, {
    where: {
      p_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send(err.ProcessErr);
    return;
  })
}