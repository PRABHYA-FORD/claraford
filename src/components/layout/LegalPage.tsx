import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = { title: string; updated: string; children: React.ReactNode };

/** Shared shell for long-form legal text (privacy, terms). */
export default function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
            Last updated: {updated}
          </Typography>
          <Stack
            spacing={2}
            sx={{
              '& h2': { typography: 'h5', mt: 4 },
              '& p, & li': { typography: 'body1', color: 'text.secondary', lineHeight: 1.75 },
              '& ul': { pl: 3, m: 0 },
              '& a': { color: 'primary.main' },
            }}
          >
            {children}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
