import * as React from 'react';
import Typography from '@mui/material/Typography';
import img from '../imagens/logo-digix-laranja.svg';

export default function Rodape() {
  return (
    <footer style={{ backgroundColor: "#ffffff", padding: "20px", textAlign: "center", marginTop: '30px' }}>
      <img src={img} alt="" style={{ width: "70px", marginBottom: "8px" }} />
      <Typography variant="body1" style={{ color: "black" }}>
       <strong>
       Desafio Digix: Feito pelo <a href="https://github.com/EnzoGabrielBarbosaFranco?tab=repositories" target="_blank" rel="noopener noreferrer">Enzo Gabriel.😎</a>
        </strong> 
      </Typography>
    </footer>
  );
}