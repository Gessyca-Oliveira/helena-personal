export const ASSESSMENTS = [
  { title: 'Anamnese', text: 'Histórico, rotina e objetivos.' },
  { title: 'Avaliação física completa', text: 'Perimetria e antropometria.' },
  { title: 'Avaliação postural', text: 'Alinhamento e postura do corpo.' },
  { title: 'Avaliação funcional', text: 'Como o seu corpo se move.' },
];

const ASSESSMENT_ITEMS = [
  'Anamnese',
  'Avaliação física completa (perimetria e antropometria)',
  'Avaliação postural',
  'Avaliação funcional',
];

export const MODALITIES = [
  {
    id: 'musculacao',
    label: 'Musculação presencial',
    description: 'Acompanhamento personalizado',
    options: [
      { days: 3, price: 200 },
      { days: 5, price: 300 },
    ],
    allowsDuo: true,
    includes: [...ASSESSMENT_ITEMS, 'Acesso e disponibilidade via app'],
  },
  {
    id: 'crossfit',
    label: 'CrossFit',
    description: 'Treino de alta intensidade',
    options: [
      { days: 1, price: 40 },
      { days: 2, price: 80 },
      { days: 3, price: 120 },
      { days: 4, price: 150 },
    ],
    allowsDuo: false,
    includes: [],
  },
  {
    id: 'planilha',
    label: 'Planilha online',
    description: 'Treino no app por 3 meses',
    price: 200,
    period: '3 meses de acompanhamento',
    allowsDuo: false,
    includes: [
      'Treino no app com vídeos demonstrativos',
      'Atualização do treino aos 45 dias',
      ...ASSESSMENT_ITEMS,
      'Guia de treinamento para suporte',
    ],
  },
];

export function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
