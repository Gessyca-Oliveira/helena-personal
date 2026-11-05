import { Box } from '@mui/material';
import HsSymbol from './HsSymbol';
import { SITE } from '../config/site';

const TURQUOISE = '#5CF2E6';
export default function Logo({ size = 22, tagline = false, textColor = '#FFFFFF' }) {
  return (
    <Box
      role="img"
      aria-label={`${SITE.name} — ${SITE.role}`}
      sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: `${size * 0.3}px` }}
    >
      <Box aria-hidden="true" sx={{ display: 'flex', alignItems: 'center', gap: `${size * 0.35}px` }}>
        <HsSymbol height={size * 2.1} color={TURQUOISE} />
        <Box
          sx={{
            fontFamily: '"Orbitron", "Chakra Petch", sans-serif',
            fontWeight: 900,
            fontSize: size,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: textColor,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Helena</span>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: `${size * 0.25}px` }}>
            Silva
            <svg viewBox="0 0 120 24" height={size * 0.55} width={size * 2.75} style={{ display: 'block' }}>
              <path
                d="M2 14H52L60 4L70 20L80 8L88 16L96 10H118"
                fill="none"
                stroke={TURQUOISE}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
