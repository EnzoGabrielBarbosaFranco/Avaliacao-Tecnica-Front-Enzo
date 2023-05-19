import Lista from './conteudo/Lista'
import { Box, CssBaseline } from '@mui/material';
import Header from './components/cabecalho';


function App() {
  return (
    <Box sx={{}}>
      <CssBaseline/>
      <Header/>
      <Lista/>
    </Box>
  );
}

export default App;