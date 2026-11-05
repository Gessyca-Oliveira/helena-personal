export default function HsSymbol({ height = 84, color = '#5CF2E6', title }) {
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };
  return (
    <svg viewBox="0 0 168 108" height={height} width={(height * 168) / 108} {...a11y} style={{ display: 'block', flexShrink: 0 }}>
      <g transform="translate(30 4) skewX(-14)" fill={color} stroke={color} strokeWidth="8" strokeLinejoin="round">
        <path d="M0 0H20V38H30V58H20V100H0Z" />
        <path d="M40 0H60V100H40Z" />
        <path d="M70 0H130V22H90V38H130V100H70V78H110V58H70Z" />
      </g>
    </svg>
  );
}
