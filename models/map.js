

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('map', {
    m_id: {
      field: "m_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    m_name: {
      field: "m_name",
      type: DataTypes.STRING(32),
      allowNull: false
    },
    m_image: {
      field: "m_image",
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    underscored: true,
    tableName: 'map',
    freezeTableName: true
  })
}