import type { Theme } from '@mui/material/styles';

type Tone = 'primary' | 'secondary';

/** Translucent brand tint that follows the active color scheme (uses CSS variables, not hex snapshots). */
export const tint = (tone: Tone, opacity: number) => (theme: Theme) =>
  `rgba(${theme.vars.palette[tone].mainChannel} / ${opacity})`;
