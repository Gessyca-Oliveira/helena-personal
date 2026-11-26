import { formatPrice } from '../../utils/formatPrice';
import { whatsappLink } from '../../utils/whatsapp';

export function getPlanSummary({ modality, days, duo }, modalities) {
  const plan = modalities.find((m) => m.id === modality) ?? modalities[0];

  if (!plan.options) {
    const message = `Olá Helena! Tenho interesse na ${plan.label.toLowerCase()} (${plan.period}).`;
    return {
      plan,
      title: plan.label,
      period: plan.period,
      price: formatPrice(plan.price),
      includes: plan.includes,
      message,
      link: whatsappLink(message),
    };
  }

  const option = plan.options.find((o) => o.days === days) ?? plan.options[0];
  const withDuo = plan.allowsDuo && duo;
  const price = withDuo ? option.duoPrice : option.price;
  const duoText = withDuo ? `, em dupla${plan.duoPriceNote ? ` (${plan.duoPriceNote})` : ''}` : '';
  const frequency = `${option.days}x por semana`;
  const includes = withDuo ? [...plan.includes, 'Atendimento em dupla no mesmo horário'] : plan.includes;
  const message = `Olá Helena! Tenho interesse em ${plan.label}, ${frequency}${withDuo ? ', em dupla' : ''}.`;

  return {
    plan,
    title: `${plan.label} · ${frequency}`,
    period: `${option.days} ${option.days === 1 ? 'treino' : 'treinos'} por semana${duoText}`,
    price: formatPrice(price),
    includes,
    message,
    link: whatsappLink(message),
  };
}