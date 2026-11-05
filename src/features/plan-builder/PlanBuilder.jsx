import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import PlanilhaPhases from './PlanilhaPhases';
import { MODALITIES } from '../../config/plans';

function StepTitle({ id, children }) {
  return (
    <Typography id={id} variant="overline" component="h3" color="primary" sx={{ display: 'block', mb: 2 }}>
      {children}
    </Typography>
  );
}

const pillSx = {
  borderRadius: '999px !important',
  border: '2px solid !important',
  minWidth: 96,
  minHeight: 60,
  fontFamily: '"Chakra Petch", sans-serif',
  fontWeight: 700,
  fontSize: '1.25rem',
};

export default function PlanBuilder({ selection, plan, onModalityChange, ondaysChange, onDuoChange }) {
  return (
    <Stack spacing={5.5}>
      <Typography variant="h2" id="titulo-monte">
        Monte seu <Box component="span" sx={{ color: 'primary.main' }}>plano</Box>
      </Typography>

      <Box role="group" aria-labelledby="passo-1">
        <StepTitle id="passo-1">1. Como você quer treinar?</StepTitle>
        <ToggleButtonGroup
          exclusive
          value={selection.modality}
          onChange={(_, id) => id && onModalityChange(id)}
          aria-labelledby="passo-1"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' }, gap: 1.5 }}
        >
          {MODALITIES.map((m) => (
            <ToggleButton
              key={m.id}
              value={m.id}
              sx={{
                borderRadius: '16px !important', border: '2px solid !important', p: 2.75, minHeight: { sm: 136 },
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1.5,
                textAlign: 'left',
              }}
            >
              <Typography component="span" variant="h3">{m.label}</Typography>
              <Typography component="span" sx={{ fontSize: '0.9375rem', fontWeight: 500 }}>{m.description}</Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {plan.options ? (
        <Stack direction="row" spacing={5} useFlexGap sx={{ flexWrap: 'wrap', rowGap: 4 }}>
          <Box role="group" aria-labelledby="passo-2">
            <StepTitle id="passo-2">2. Quantas vezes por semana?</StepTitle>
            <ToggleButtonGroup
              exclusive
              value={selection.days}
              onChange={(_, days) => days && ondaysChange(days)}
              aria-labelledby="passo-2"
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}
            >
              {plan.options.map((o) => (
                <ToggleButton key={o.days} value={o.days} sx={pillSx}>{o.days}x</ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {plan.allowsDuo && (
            <Box role="group" aria-labelledby="passo-3">
              <StepTitle id="passo-3">3. Vai treinar em dupla?</StepTitle>
              <ToggleButtonGroup
                exclusive
                value={selection.duo}
                onChange={(_, duo) => duo !== null && onDuoChange(duo)}
                aria-labelledby="passo-3"
                sx={{ display: 'flex', gap: 1.25 }}
              >
                <ToggleButton value={false} sx={{ ...pillSx, fontSize: '1.125rem', textTransform: 'uppercase' }}>Não</ToggleButton>
                <ToggleButton value={true} sx={{ ...pillSx, fontSize: '1.125rem', textTransform: 'uppercase' }}>Sim</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          )}
        </Stack>
      ) : (
        <PlanilhaPhases />
      )}
    </Stack>
  );
}