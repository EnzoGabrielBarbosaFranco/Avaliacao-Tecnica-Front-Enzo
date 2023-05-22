import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import img from '../imagens/logo-digix.svg';

export default function Cabecalho() {
    return (
        <AppBar component="nav" style={{ backgroundColor: "#2C006A" }}>
            <Toolbar>
                <img src={img} alt="" style={{ width: "100px", marginRight: "30px", marginBottom: "15px" }} />
                <Typography
                    variant="h4"
                    fontFamily={'Train One'}
                    sx={{
                        flexGrow: 1,
                        color: "white",
                        cursor: "pointer",
                        lineHeight: "100px"
                    }}
                >
                    Desafio Digix
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
