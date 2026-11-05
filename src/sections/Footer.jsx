import { Box, Container, Link, Typography } from '@mui/material';
import { SITE } from '../config/site';
import { whatsappLink } from '../utils/whatsapp';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 5 }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}
      >
        <Box>
          <Logo size={20} />
          <Typography sx={{ mt: 1.5, fontSize: '0.9375rem', color: 'text.secondary' }}>
            {SITE.name} · {SITE.cref}  · {SITE.city} - {SITE.state}
          </Typography>
        </Box>
        <Box component="nav" aria-label="Contato" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" underline="hover">WhatsApp</Link>
          <Link href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" underline="hover">Instagram</Link>
        </Box>
        <Typography sx={{ width: '100%', fontSize: '0.8125rem', color: '#A8A8A8' }}>
          © {new Date().getFullYear()} {SITE.autor}. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}