import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

let usuarios = [];

// Rota POST para cadastrar usuário 
app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    const saltRounds = 10;

    bcrypt.hash(usuario.senha, saltRounds, function (err, hash) {
        if (hash) {
            usuarios.push({
                id: usuarios.length,
                nome: usuario.nome,
                email: usuario.email,
                senha: hash,
                recados: []
            });
            return res.status(200).json("Usuário cadastrado com sucesso!");
        } else {
            return res.status(400).json("Ocorreu um erro: " + err)
        }
    });
})

app.get('/', (req, res) => { return res.json("ok") });

app.listen(1428, () => console.log("Servidor está rodando"));