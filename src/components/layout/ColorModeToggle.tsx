'use client';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function ColorModeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  // mode is undefined until hydrated; render a stable placeholder to avoid a mismatch.
  const resolved = mode === 'system' ? systemMode : mode;
  const isDark = resolved === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        onClick={() => setMode(isDark ? 'light' : 'dark')}
        sx={{ border: 1, borderColor: 'divider', visibility: resolved ? 'visible' : 'hidden' }}
        size="small"
      >
        {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
