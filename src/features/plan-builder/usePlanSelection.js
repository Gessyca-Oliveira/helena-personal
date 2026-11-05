import { useState } from 'react';
import { MODALITIES } from '../../config/plans';
import { getPlanSummary } from './getPlanSummary';

const INITIAL = { modality: 'musculacao', times: 3, duo: false };

export function usePlanSelection() {
  const [selection, setSelection] = useState(INITIAL);

  const setModality = (id) => {
    const next = MODALITIES.find((m) => m.id === id);
    if (!next) return;
    setSelection((prev) => ({
      modality: id,
      times: next.options?.some((o) => o.times === prev.times) ? prev.times : next.options?.[0].times,
      duo: next.allowsDuo ? prev.duo : false,
    }));
  };

  const setTimes = (times) => setSelection((prev) => ({ ...prev, times }));
  const setDuo = (duo) => setSelection((prev) => ({ ...prev, duo }));

  return {
    selection,
    summary: getPlanSummary(selection, MODALITIES),
    setModality,
    setTimes,
    setDuo,
  };
}