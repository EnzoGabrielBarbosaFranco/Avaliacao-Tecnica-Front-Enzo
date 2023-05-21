import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Cabecalho() {
    return (
        <AppBar component="nav" style={{ backgroundColor: "#2C006A" }}>
            <Toolbar>
                <Typography
                    variant="h4"
                    fontFamily={'Train One'}
                    sx={{ flexGrow: 1, padding: "30px", color: "white", border: "none", background: "none", cursor: "pointer" }}
                >
                    Desafio Digix
                </Typography>
            </Toolbar>
        </AppBar >
    );
}