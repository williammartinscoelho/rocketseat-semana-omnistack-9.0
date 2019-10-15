const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb+srv://omnistackuser:omnistackpass@semana-omnistack-09-jras1.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edit e delete)
// req.body = Acessar corpo da requisição (para create e edit)

app.use(cors());
// por padrão o express nao entende requisições no formato json
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);


// define a porta que vai rodar o servidor
app.listen(3333);