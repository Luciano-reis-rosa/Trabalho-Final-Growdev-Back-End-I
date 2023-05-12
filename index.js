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

// Rota POST para efetuar login 
app.post("/usuarios/login", (req, res) => {
    const login = req.body
    const email = login.email;
    const senha = login.senha;
    const usuario = usuarios.find(usuario => usuario.email === email);

    if (!usuario) {
        return res.status(401).json("Por favor, digite um email válido");
    }
    bcrypt.compare(senha, usuario.senha, function (err, result) {
        if (result) {
            return res.status(200).json("Login efetuado! O seu ID para criar recados é: " + usuario.id);
        } else {
            return res.status(401).json("Senha inválida");
        }
    });
})

app.get('/', (req, res) => { return res.json("ok") });

app.listen(1428, () => console.log("Servidor está rodando"));