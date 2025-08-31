const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

//modulos do projeto
const database = require("./database/db");

//modulos de rotas
const movieRoute = require("./routes/movie.routes");

//variaveis de controles
const app = express();
const PORT = process.env.PORT || 8765;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rota para ativar api
app.get("/", (req, res)=>{
    res.send("api working");
})

//routes
app.use("/movies", movieRoute);

//ligando o servidor de acordo com o database
database.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log(chalk.yellow("Run Server sucess"));
    console.log(chalk.yellow(`http://localhost:${PORT}`));
  })
}).catch(error => console.log(error));