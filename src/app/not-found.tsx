import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Logo from '@/components/brand/Logo';

export default function NotFound() {
  return (
    <Stack spacing={3} sx={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2 }}>
      <Logo />
      <Typography variant="h2" component="h1">404</Typography>
      <Typography color="text.secondary">The page you are looking for does not exist.</Typography>
      <Button variant="contained" href="/">Back to home</Button>
    </Stack>
  );
}
