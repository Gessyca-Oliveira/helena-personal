import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function PlanSummary({ summary }) {
  return (
    <Paper
      component="aside"
      aria-labelledby="titulo-resumo"
      elevation={0}
      sx={{
        bgcolor: 'background.default', border: 2, borderColor: 'primary.main', borderRadius: '24px',
        p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2.75,
        position: { md: 'sticky' }, top: { md: 24 },
      }}
    >
      <Typography variant="overline" component="p" color="primary">Seu plano</Typography>
      <Box aria-live="polite" sx={{ display: 'flex', flexDirection: 'column', gap: 2.75 }}>
        <Box>
          <Typography variant="h3" component="h3" id="titulo-resumo" sx={{ fontSize: '1.75rem' }}>{summary.title}</Typography>
          <Typography color="text.secondary" sx={{ mt: 0.75 }}>{summary.period}</Typography>
        </Box>
        <Typography variant="h4" component="p" color="primary" sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
          {summary.price}
        </Typography>
        {summary.includes.length > 0 && (
          <List disablePadding sx={{ borderTop: 1, borderColor: 'divider', pt: 2.5 }}>
            {summary.includes.map((item) => (
              <ListItem key={item} disableGutters sx={{ py: 0.6, alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 32, mt: 0.4 }}>
                  <CheckIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={item} slotProps={{ primary: { sx: { color: '#E2E2E2' } } }} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Button
        variant="contained"
        size="large"
        href={summary.link}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<WhatsAppIcon />}
        sx={{ minHeight: 60 }}
      >
        Enviar no WhatsApp
      </Button>
    </Paper>
  );
}