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

function createData(id, nomeResponsavel, numeroDependentes, rendaTotal, pontuacao) {
  return { id, nomeResponsavel, numeroDependentes, rendaTotal, pontuacao };
}

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/familias')
      .then(response => {
        // Dados obtidos com sucesso
        const data = response.data;

        // Mapeie os dados obtidos e crie as linhas da tabela
        const tableRows = data.map(item => createData(item.id, item.nomeResponsavel, item.numeroDependentes, item.rendaTotal, item.pontuacao));

        // Atualize o estado com as linhas da tabela
        setRows(tableRows);
      })
      .catch(error => {
        // Ocorreu um erro ao obter os dados
        console.error('Erro ao obter os dados:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div>
      <Typography variant="h2" component="div" align="center" style={{ marginTop: '140px', color: '#0BC0D3' }}>
        Pontuação das Famílias:
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '70px', boxShadow: 'none' }}>
        <Table sx={{ minWidth: 650, backgroundColor: '#ff821b', width: 'auto', tableLayout: 'fixed', borderRadius: '5px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '15px', width: '10%' }}>
                <strong>
                  ID:
                </strong>
              </TableCell>
              <TableCell align='center' style={{ width: '30%' }}>
                <strong>
                  Nome do Responsável:
                </strong>
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                <strong>
                  Dependente(s):
                </strong>
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                <strong>
                  Renda:
                </strong>
              </TableCell>
              <TableCell style={{ fontSize: '15px', width: '30%' }}>
                  Pontos Totais:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ width: '10%' }}>
                  {row.id}
                </TableCell>
                <TableCell align='center' style={{ width: '30%' }}>{row.nomeResponsavel}</TableCell>
                <TableCell align="center" style={{ width: '20%' }}>{row.numeroDependentes}</TableCell>
                <TableCell align="center" style={{ width: '20%' }}>{row.rendaTotal}</TableCell>
                <TableCell align="center" style={{ width: '20%' }}>{row.pontuacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
  );
}
