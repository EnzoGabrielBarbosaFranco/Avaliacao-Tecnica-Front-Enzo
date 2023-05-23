import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function createData(id, nomeResponsavel, quantidadeDependentes, renda, pontosTotais) {
  return { id, nomeResponsavel, quantidadeDependentes, renda, pontosTotais };
}

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/familias')
      .then(response => {
        // Dados obtidos com sucesso
        const data = response.data;

        // Mapeie os dados obtidos e crie as linhas da tabela
        const tableRows = data.map(item => createData(item.id,  item.nomeResponsavel, item.quantidadeDependentes, item.renda, item.pontosTotais));

        // Atualize o estado com as linhas da tabela
        setRows(tableRows);
      })
      .catch(error => {
        // Ocorreu um erro ao obter os dados
        console.error('Erro ao obter os dados:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h2" component="div" align="center" style={{ marginTop: '220px', color: '#0BC0D3' }}>
        Desafio Digix Enzo
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '70px', marginLeft: '45px', boxShadow: 'none' }}>
        <Table sx={{ minWidth: 650, backgroundColor: '#ff821b', width: '95%', tableLayout: 'fixed', borderRadius: '5px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '15px' }}>ID</TableCell>
              <TableCell align='center'>Nome do Responsável</TableCell>
              <TableCell align="center">Dependente(s)</TableCell>
              <TableCell align="center">Renda</TableCell>
              <TableCell>Pontos Totais</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align='center'>{row.nomeResponsavel}</TableCell>
                <TableCell align="center">{row.quantidadeDependentes}</TableCell>
                <TableCell align="center">{row.renda}</TableCell>
                <TableCell align="center">{row.pontosTotais}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
