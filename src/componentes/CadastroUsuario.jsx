import React, { useState } from "react";


export default (props) => {

    const [nome, alteraNome] = useState('')
    const [pronome, alteraPronome] = useState('')
    const [nascimento, alteraNascimento] = useState('')
    const [CPF, alteraCPF] = useState('')
    const [telefone, alteraTelefone] = useState('')
    return (
        <>  <h5>Nome: </h5>
            <input type="text" value={nome} onChange={e => alteraNome(e.target.value)}/>
            <h5>Pronome: </h5>
            <input type="text" value={pronome} onChange={e => alteraPronome(e.target.value)}/>
            <h5>Data de Nascimento: </h5>
            <input type="text" value={nascimento} onChange={e => alteraNascimento(e.target.value)}/>
            <h5>CPF: </h5>
            <input type="text" value={CPF} onChange={e => alteraCPF(e.target.value)}/>
            <h5>Telefone: </h5>
            <input type="text" value={telefone} onChange={e => alteraTelefone(e.target.value)}/>
            <br/>
            <button>Cadastrar</button>
        </>
    );
};