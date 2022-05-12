const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cqgvsjlq", "cqgvsjlq", "VIeUw5jP-U83HMhS9ayQB6QsAuOf-0gx", {
  host: "kesavan.db.elephantsql.com",
  dialect: "postgres",
});
try {
  sequelize.authenticate();
  console.log("conectado");
} catch (error) {
  console.log(`não foi possivel conectar: ${error}`);
}

module.exports = sequelize;
