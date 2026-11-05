import { Box, Button, Container, Paper, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SITE } from '../config/site'

const FACTS = [
  { value: '45 + 45', text: 'Dias de planilha, com atualização do treino', variant: 'filled' },
  { value: '1x a 5x', text: 'Por semana, na musculação presencial ou no CrossFit', variant: 'outlined' },
  { value: 'Dupla', text: 'Treine com alguém no mesmo horário na musculação', variant: 'light' },
];

const STEPS = ['Escolha a modalidade', 'Escolha a frequência', 'Envie direto no WhatsApp'];

const factStyles = {
  filled: { bgcolor: 'primary.main', color: 'primary.contrastText' },
  outlined: { border: 2, borderColor: 'primary.main', bgcolor: 'transparent', '& .fact-value': { color: 'primary.main' } },
  light: { bgcolor: '#FFFFFF', color: '#0A0A0A' },
};

export default function Hero() {
  return (
    <Box component="section" aria-labelledby="titulo-principal" sx={{ pt: { xs: 2, md: 5 }, pb: { xs: 8, md: 12 } }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.5 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 }, borderRadius: '24px', minHeight: { md: 480 },
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4,
          }}
        >
          <Typography variant="overline" component="p" color="primary">
            Profissional de Educação Física · {SITE.city} - {SITE.state}
          </Typography>
          <Typography variant="h1" id="titulo-principal">
            Musculação e CrossFit{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>em {SITE.city}</Box>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '1.0625rem', md: '1.1875rem' } }}>
              Monte seu plano em 3 cliques:
            </Typography>

            <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {STEPS.map((step, i) => (
                <Box component="li" key={step} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 36,
                      height: 36,
                      flexShrink: 0,
                      border: 2,
                      borderRadius: '50%',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"Chakra Petch", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                    }}
                  >
                    {i + 1}
                  </Box>
                  <Typography sx={{ fontSize: { xs: '1.0625rem', md: '1.1875rem' }, fontWeight: 500 }}>
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button variant="contained" size="large" href="#monte" endIcon={<ArrowDownwardIcon />} sx={{ alignSelf: 'flex-start', mt: 1 }}>
              Montar meu plano
            </Button>
          </Box>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateRows: { md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.5 }}>
          {FACTS.map((fact) => (
            <Paper
              key={fact.value}
              elevation={0}
              sx={{
                ...factStyles[fact.variant],
                borderRadius: '24px', px: { xs: 3, md: 4 }, py: 3.5,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2.5, flexWrap: 'wrap',
              }}
            >
              <Typography className="fact-value" variant="h4" component="p" sx={{ fontSize: { xs: '2.75rem', md: '3.5rem' } }}>
                {fact.value}
              </Typography>
              <Typography sx={{ fontWeight: 600, maxWidth: 240, lineHeight: 1.35 }}>{fact.text}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}