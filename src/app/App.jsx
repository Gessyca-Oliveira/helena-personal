import { Box, Link } from '@mui/material';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import { PlanBuilderSection } from '../features/plan-builder';
import Assessments from '../sections/Assessments';

export default function App() {
  return (
    <>
      <Link
        href="#conteudo"
        sx={{
          position: 'absolute', left: 16, top: -80, zIndex: 10,
          bgcolor: 'primary.main', color: 'primary.contrastText',
          px: 2, py: 1, borderRadius: '8px', fontWeight: 600,
          '&:focus': { top: 16 },
        }}
      >
        Pular para o conteúdo
      </Link>
      <Header />
      <Box component="main" id="conteudo">
        <Hero />
        <Assessments />
        <PlanBuilderSection />
      </Box>
      <Footer />
    </>
  );
}