import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
};

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const centered = align === 'center';
  return (
    <Stack
      spacing={2}
      sx={{ textAlign: align, alignItems: centered ? 'center' : 'flex-start', maxWidth: 720, mx: centered ? 'auto' : 0, mb: { xs: 6, md: 8 } }}
    >
      <Typography variant="overline" color="primary">
        {eyebrow}
      </Typography>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { md: '1.125rem' } }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}
