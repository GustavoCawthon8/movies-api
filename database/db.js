require("dotenv").config();
const Sequelize = require("sequelize");
const chalk = require("chalk");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//tratamento de erro de conexão com o banco de dados
try{
    sequelize.authenticate();
    console.log(chalk.green("connecting database "));
}catch(err){
    console.log(chalk.red("Error connecting to database") + err);
}

module.exports = sequelize;