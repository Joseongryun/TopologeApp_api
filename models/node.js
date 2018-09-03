module.exports = (sequelize, DataTypes) => {
  return sequelize.define('node', {
    n_id: {
      field: "n_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    m_id: {
      field: "m_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_ip: {
      field: "n_ip",
      type: DataTypes.STRING(32),
      allowNull: false
    },
    n_hostname: {
      field: "n_hostname",
      type: DataTypes.STRING(32),
      allowNull: false
    },
    n_kinds: {
      field: "n_kinds",
      type: DataTypes.STRING(32),
      allowNull: false
    },
    n_status: {
      field: "n_status",
      type: DataTypes.STRING(32),
      allowNull: false
    },
    n_x: {
      field: "n_x",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_y: {
      field: "n_y",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_image: {
      field: "n_image",
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {
    underscored: true,
    tableName: 'node',
    freezeTableName: true
  })
}