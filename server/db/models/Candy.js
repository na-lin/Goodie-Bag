const Sequelize = require("sequelize");
const db = require("../database");

const defaultImageUrl = "";

module.exports = db.define("candy", {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.NUMBER,
    validate: {
      max: 10,
      min: 0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "/bg.jpg",
  },
});
