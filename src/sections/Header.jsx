import { Box, Button, Container } from '@mui/material';
import Logo from '../components/Logo';

export default function Header() {
  return (
    <Box component="header">
      <Container
        maxWidth="lg"
        sx={{ py: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}
      >
        <Box component="a" href="#conteudo" aria-label="Helena Silva, voltar ao início" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}><Logo size={17} /></Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}><Logo size={21} /></Box>
        </Box>
        <Button variant="outlined" href="#monte" sx={{ display: { xs: 'none', sm: 'inline-flex' }, minHeight: 44, borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
          Monte seu plano
        </Button>
      </Container>
    </Box>
  );
}