const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_sequelize', 'postgres', '456ALVES', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});