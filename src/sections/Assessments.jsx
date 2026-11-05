import { Box, Container, Typography } from '@mui/material';
import { ASSESSMENTS } from '../config/plans';

export default function Assessments() {
  return (
    <Box component="section" aria-labelledby="titulo-avaliacoes" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" id="titulo-avaliacoes" sx={{ maxWidth: 760 }}>
          Avaliação completa <Box component="span" sx={{ color: 'primary.main' }}>antes de começar</Box>
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 620 }}>
          Inclusa na planilha individual e na musculação presencial. A planilha também traz um guia de treinamento para te dar suporte.
        </Typography>
        <Box
          component="ul"
          sx={{ m: 0, mt: 5, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 3 }}
        >
          {ASSESSMENTS.map((a) => (
            <Box component="li" key={a.title} sx={{ borderTop: 3, borderColor: 'primary.main', pt: 2.25 }}>
              <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>{a.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75, fontSize: '0.9375rem' }}>{a.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
