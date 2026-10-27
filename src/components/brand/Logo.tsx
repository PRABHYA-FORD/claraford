import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type LogoProps = { size?: number; showWordmark?: boolean };

/** ClaraFord mark: overlapping speech bubbles forming a "C", signalling many channels → one conversation. */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="cf-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3355FF" />
          <stop offset="1" stopColor="#12B5A6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#cf-grad)" />
      <path
        d="M27.5 13.2A9 9 0 1 0 27.5 26.8"
        fill="none"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="3.2" fill="#fff" />
      <path d="M11 30.5 9 35l5.2-2.4" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export default function Logo({ size = 34, showWordmark = true }: LogoProps) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25 }}>
      <LogoMark size={size} />
      {showWordmark && (
        <Typography
          component="span"
          sx={{ fontWeight: 800, fontSize: size * 0.62, letterSpacing: '-0.03em', color: 'text.primary' }}
        >
          Clara<Box component="span" sx={{ color: 'primary.main' }}>Ford</Box>
        </Typography>
      )}
    </Box>
  );
}
