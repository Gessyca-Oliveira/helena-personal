import { useState } from 'react';
import { MODALITIES } from '../../config/plans';
import { getPlanSummary } from './getPlanSummary';

const INITIAL = { modality: 'musculacao', days: 3, duo: false };

export function usePlanSelection() {
  const [selection, setSelection] = useState(INITIAL);

  const setModality = (id) => {
    const next = MODALITIES.find((m) => m.id === id);
    if (!next) return;
    setSelection((prev) => ({
      modality: id,
      days: next.options?.some((o) => o.days === prev.days) ? prev.days : next.options?.[0].days,
      duo: next.allowsDuo ? prev.duo : false,
    }));
  };

  const setdays = (days) => setSelection((prev) => ({ ...prev, days }));
  const setDuo = (duo) => setSelection((prev) => ({ ...prev, duo }));

  return {
    selection,
    summary: getPlanSummary(selection, MODALITIES),
    setModality,
    setdays,
    setDuo,
  };
}