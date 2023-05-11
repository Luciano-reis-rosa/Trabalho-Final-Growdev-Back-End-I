import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

app.get('/', (req, res) => { return res.json("ok") });

app.listen(5555, () => console.log("Servidor está rodando"));