var model = require('../models').db;

exports.get_node_list = (req, res) => {
  if (req.body.m_id == undefined) {
    res.status(400).send("Check Validation");
    return;
  }
  model.map.findOne({
    where: {
      m_id: req.params.m_id
    }
  }).then((map) => {
    if (map == null) {
      res.status(400).send("Not exist");
      return;
    }
    model.node.findAll({
      where: {
        m_id: req.params.m_id
      }
    }).then((result) => {
      res.status(200).json(result);
      return;
    }).catch((error) => {
      console.log(error);
      res.status(400).send("Process error");
      return;
    })

  }).catch((error) => {
    res.status(400).send("Process error")
    return;
  })
}

exports.add_node = (req, res) => {
  var m_id = req.body.m_id;
  var n_ip = req.body.n_ip;
  var n_hostname = req.body.n_hostname;
  var n_kinds = req.body.n_kinds;
  var n_status = req.body.n_status;
  var n_x = req.body.n_x;
  var n_y = req.body.n_y;
  var n_image = req.file.filename;

  if (m_id == undefined || n_ip == undefined || n_hostname == undefined || n_kinds == undefined || n_status == undefined || n_x == undefined || n_y == undefined || n_image == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  model.node.create({
    m_id: m_id,
    n_ip: n_ip,
    n_hostname: n_hostname,
    n_kinds: n_kinds,
    n_status: n_status,
    n_x: n_x,
    n_y: n_y,
    n_image: n_image
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error")
    return;
  })

}

exports.delete_node = (req, res) => {
  var n_id = req.params.n_id;
  if (n_id == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  map.node.destory({
    where: {
      n_id: n_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error");
    return;
  })
}

exports.get_node = (req, res) => {
  var n_id = req.params.n_id;
  if (n_id == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  map.node.findOne({
    where: {
      n_id: n_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    res.status(400).send("Process error");
  })
}

exports.edit_node_basic = (req, res) => {
  var n_id = req.params.n_id;
  var n_hostname = req.body.n_hostname;
  var n_kinds = req.body.n_kinds;
  var n_status = req.body.n_status;
  if (n_id == undefined || n_hostname == undefined || n_kinds == undefined || n_status == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  map.node.update({
    n_hostname: n_hostname,
    n_kinds: n_kinds,
    n_status: n_status
  }, {
    where: {
      n_id: n_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).error((error) => {
    console.log(error);
    res.status(400).json(error);
    return;
  })
}

exports.edit_node_location = (req, res) => {
  var n_id = req.params.n_id;
  var n_x = req.body.n_x;
  var n_y = req.body.n_y;
  if (n_id == undefined || n_x == undefined || n_y == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  map.node.update({
    n_x: n_x,
    n_y: n_y
  }, {
    where: {
      n_id: n_id
    }
  }).then((result) => {
    res.status(200).json(result);
    return;
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error");
  })
}

exports.edit_node_image = (req, res) => {
  var n_id = req.params.n_id;
  var n_image = req.file.filename;
  if (n_id == undefined || n_image == undefined) {
    res.status(400).send("Check validation");
    return;
  }
  map.node.update({
    n_image: n_image
  }, {
    where: {
      n_id: n_id
    }
  }).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    console.log(error);
    res.status(400).send("Process error");
  })
}