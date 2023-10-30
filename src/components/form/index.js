import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputWrapper } from "./styles";

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [habilidades, setHabilidades] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Nome: ${nome}, Habilidades: ${habilidades}`);
  }

  return (
    <div>
      <h1>Formulário de Registro</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            label="Habilidades"
            multiline
            rows={4}
            variant="outlined"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          />
        </InputWrapper>
        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      </form>
    </div>
  );
}

export default Formulario;

