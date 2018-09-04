const model = require('./index');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('path', {
    p_id: {
      field: "p_id",
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
    p_start: {
      field: "p_start",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    p_end: {
      field: "p_end",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    p_option: {
      field: "p_option",
      type: DataTypes.STRING(32),
      defaultValue: "solid",
      allowNull: false
    },
    p_color: {
      field: "p_color",
      type: DataTypes.STRING(32),
      defaultValue: "black",
      allowNull: false
    }
  }, {
    underscored: true,
    tableName: 'path',
    freezeTableName: true
  })
}