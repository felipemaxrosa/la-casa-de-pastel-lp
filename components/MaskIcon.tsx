// Máscara estilizada (motivo decorativo próprio, inspirado no logo).
export default function MaskIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M60 14C34 14 20 34 20 58c0 28 18 48 40 48s40-20 40-48c0-24-14-44-40-44Z" />
      <path d="M30 50q13-12 25 0" />
      <path d="M65 50q13-12 25 0" />
      <circle cx="43" cy="59" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="77" cy="59" r="4.5" fill="currentColor" stroke="none" />
      <path d="M60 64v15" />
      <path d="M44 90q16 14 32 0" />
    </svg>
  );
}
