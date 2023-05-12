import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

let usuarios = [];

// Middleware para verificar se já existe um email igual no cadastro
function verificaEmail(req, res, next) {
    const email = req.body.email;
    const existe = usuarios.some(usuario => usuario.email === email);

    if (!existe) {
        next();
    } else {
        return res.status(400).json("Por favor, informe outro email!")
    }
}

// Middleware para verificar se todos os campos estão preenchidos no cadastro
function camposPreenchidosCadastro(req, res, next) {
    const campo = req.body;

    if (!campo.nome) {
        return res.status(400).json("É necessário informar o nome para o cadastro");
    } else if (!campo.email) {
        return res.status(400).json("É necessário informar o email para o cadastro");
    } else if (!campo.senha) {
        return res.status(400).json("É necessário informar a senha para o cadastro");
    } else {
        next();
    }
}

// Middleware para verificar se todos os campos estão preenchidos no login
function camposPreenchidosLogin(req, res, next) {
    const campo = req.body;

    if (!campo.email) {
        return res.status(400).json("É necessário informar o email para o login");
    } else if (!campo.senha) {
        return res.status(400).json("É necessário informar a senha para o login");
    } else {
        next();
    }
}

// Middleware para verificar se todos os campos estão preenchidos na criação de recados
function camposPreenchidosRecado(req, res, next) {
    const campo = req.body;

    if (!campo.titulo) {
        return res.status(400).json("É necessário informar o título do recado para criação");
    } else if (!campo.descricao) {
        return res.status(400).json("É necessário informar a descrição da recado para criação");
    } else {
        next();
    }
}

// Rota POST para cadastrar usuário 
app.post("/usuarios", verificaEmail, camposPreenchidosCadastro, (req, res) => {
    const usuario = req.body;
    const saltRounds = 10;

    bcrypt.hash(usuario.senha, saltRounds, function (err, hash) {
        if (hash) {
            usuarios.push({
                id: Math.floor(Math.random()*1000),
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
app.post("/usuarios/login", camposPreenchidosLogin, (req, res) => {
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

// Rota POST para um usuário criar recados usando seu ID
app.post("/usuarios/:id/recados", camposPreenchidosRecado, (req, res) => {
    const novoRecado = req.body
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id == id);

    if (!usuario) {
        return res.status(400).json("Por favor, informe um ID válido");
    }

    usuario.recados.push({
        id: Math.floor(Math.random()*1000),
        titulo: novoRecado.titulo, 
        descricao: novoRecado.descricao, 
    });
    return res.status(201).json("Recado criado com sucesso!");
})

// Rota GET para listar os recados de um usuário através de seu ID
app.get("/usuarios/:id/recados", (req, res) => {
    const id = Number(req.params.id);
    const unicoId = Number(req.query.id);
    const usuario = usuarios.find(usuario => usuario.id == id);

    if (!usuario) {
        return res.status(400).json("Por favor, informe um ID válido");
    }
    if (unicoId) {
        const unicoRecado = usuario.recados.find(recado => recado.id == unicoId);
        return res.status(200).json(unicoRecado);
    }
    return res.status(200).json(usuario.recados);
})

// Rota PUT para atualizar um recado a partir do ID de usuário e ID de recado
app.put("/usuarios/:id/recados/:idrecado", (req, res) => {
    const recadoAtualizado = req.body;
    const id = Number(req.params.id);
    const idRecado = Number(req.params.idrecado);
    const usuario = usuarios.find(usuario => usuario.id == id);

    if (!usuario) {
        return res.status(400).json("Por favor, informe um ID de usuário válido");
    }

    const indexRecado = usuario.recados.findIndex(recado => recado.id == idRecado);

    if (indexRecado == -1) {
        return res.status(400).json("Por favor, informe um ID de recado válido");
    }

            usuario.recados[indexRecado] = {
                id: idRecado,
                titulo: recadoAtualizado.titulo,
                descricao: recadoAtualizado.descricao
            };
        return res.status(200).json("Usuário atualizado com sucesso!");
})

// Rota DELETE para deletar um recado a partir do ID de usuário e ID de recado
app.delete("/usuarios/:id/recados/:idrecado", (req, res) => {
    const id = Number(req.params.id);
    const idRecado = Number(req.params.idrecado);
    const usuario = usuarios.find(usuario => usuario.id == id);

    if (!usuario) {
        return res.status(400).json("Por favor, informe um ID de usuário válido");
    }

    const indexRecado = usuario.recados.findIndex(recado => recado.id == idRecado);

    if (indexRecado == -1) {
        return res.status(400).json("Por favor, informe um ID de recado válido");
    }

    usuario.recados.splice(indexRecado, 1);
    return res.status(200).json("Recado deletado com sucesso!");
})

app.get('/', (req, res) => { return res.json("ok") });

app.listen(1428, () => console.log("Servidor está rodando"));