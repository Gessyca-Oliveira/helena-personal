import { Box, Stack, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function PlanilhaPhases() {
  return (
    <Stack spacing={2}>
      <Typography variant="overline" component="h3" color="primary">2. Como funcionam os 3 meses</Typography>
      <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', borderRadius: '14px', overflow: 'hidden', minHeight: 96 }}>
        <Box component="li" sx={{ flex: 1, bgcolor: 'primary.main', color: 'primary.contrastText', px: 2.5, py: 2.25, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" component="span">Fase 1</Typography>
          <Typography component="span" sx={{ fontWeight: 500 }}>Dias 1 a 45</Typography>
        </Box>
        <Box component="li" sx={{ bgcolor: '#FFFFFF', color: '#0A0A0A', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <AutorenewIcon aria-hidden="true" />
          <Typography component="span" sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>Atualização</Typography>
        </Box>
        <Box component="li" sx={{ flex: 1, border: 2, borderLeft: 0, borderColor: 'primary.main', borderRadius: '0 14px 14px 0', px: 2.5, py: 2.25, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" component="span" color="primary">Fase 2</Typography>
          <Typography component="span" sx={{ fontWeight: 500 }}>Dias 46 a 90</Typography>
        </Box>
      </Box>
      <Typography color="text.secondary">Treino no aplicativo com vídeos demonstrativos de cada exercício.</Typography>
    </Stack>
  );
}