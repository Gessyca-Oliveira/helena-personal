import { Box, Container } from '@mui/material';
import { usePlanSelection } from './usePlanSelection';
import PlanBuilder from './PlanBuilder';

export default function PlanBuilderSection() {
  const { selection, summary, setModality, setTimes, setDuo } = usePlanSelection();

  return (
    <Box component="section" id="monte" aria-labelledby="titulo-monte" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' }, gap: 5, alignItems: 'start' }}
      >
        <PlanBuilder
          selection={selection}
          plan={summary.plan}
          onModalityChange={setModality}
          onTimesChange={setTimes}
          onDuoChange={setDuo}
        />
      </Container>
    </Box>
  );
}