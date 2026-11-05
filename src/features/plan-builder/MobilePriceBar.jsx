import { Box, Button, Paper, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function MobilePriceBar({ summary }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 20,
        alignItems: 'center', justifyContent: 'space-between', gap: 2,
        px: 2, pt: 1.5, pb: 'calc(12px + env(safe-area-inset-bottom))',
        borderTop: 1, borderColor: 'divider', borderRadius: 0,
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography noWrap sx={{ fontSize: '0.8125rem', color: 'primary.main' }}>Monte seu plano:</Typography>
        <Typography noWrap sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>{summary.title}</Typography>
        <Typography variant="h4" component="p" color="primary" sx={{ fontSize: '1.75rem' }}>{summary.price}</Typography>
      </Box>
      <Button
        variant="contained"
        href={summary.link}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<WhatsAppIcon />}
        sx={{ flexShrink: 0, px: 2.5 }}
      >
        WhatsApp
      </Button>
    </Paper>
  );
}
