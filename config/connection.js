const Sequelize = require("sequelize");

//what is this for?
const { connect } = require("../controllers/post_controllers");



let sequelize = new Sequelize("cwps2uhy3rl1ri7c", "qdtonaymnd8v1p9u", "uyvaxf6i5lazjg4q", {
   host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
   port: 3306,
   dialect: "mysql",
   pool: {
     max: 5,
     min: 0,
     idle: 10000
   }
 });

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

