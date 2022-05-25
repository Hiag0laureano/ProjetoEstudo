import {useState} from "react"

export default function Form(){

    const[nome,setNome]=useState("");
    const[email,setEmail]=useState("");
    const[cpf,setCPF]=useState("");
    const[telefone,setTelefone]=useState("");
    const[idade,setIdade]=useState("");
    const[usuario,setUsuario]=useState("");
    const[senha,setSenha]=useState("");

    return(
        <div className= "form">
            <h2>Cadastro de Cliente</h2>

            <div class="mb-3">
                <label for="Nome Completo" class="form-label">Nome Completo</label>
                <input type="text" class="form-control" id="Nome Completo" placeholder="Nome do Cliente"/>
            </div>

            <div class="mb-3">
                <label for="Email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="Email" placeholder="Email"/>
            </div>

            <div class="mb-3">
                <label for="CPF" class="form-label">CPF</label>
                <input type="text" class="form-control" id="CPF" placeholder="CPF do Cliente"/>
            </div>

            <div class="mb-3">
                <label for="Telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="Telefone" placeholder="Telefone"/>
            </div>

            <div class="mb-3">
                <label for="Idade" class="form-label">Idade</label>
                <input type="number" class="form-control" id="Idade" placeholder="Idade"/>
            </div>

            <div class="mb-3">
                <label for="Usuario" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="Usuario" placeholder="Usuario"/>
            </div>

            <div class="mb-3">
                <label for="Senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="Senha" placeholder="Password"/>
            </div>

            <button type="button" class="btn btn-dark">Cadastrar</button>
        </div>
    )
}