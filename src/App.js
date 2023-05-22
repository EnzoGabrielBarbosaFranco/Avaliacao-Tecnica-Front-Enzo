import Lista from './conteudo/Lista'
import Footer from './conteudo/Footer'
import { Box, CssBaseline } from '@mui/material';
import Header from './components/cabecalho';

function App() {
  return (
    <Box sx={{}}>
      <CssBaseline/>
      <Header/>
      <Lista/>
      <Footer/>
    </Box>
  );
}

export default App;