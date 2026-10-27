import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Logo from '@/components/brand/Logo';
import { footerLinks, site } from '@/content/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper', pt: { xs: 8, md: 10 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5} sx={{ maxWidth: 360 }}>
              <Logo />
              <Typography variant="body2" color="text.secondary">
                {site.description}
              </Typography>
              {site.email && (
                <Link href={`mailto:${site.email}`} underline="hover" variant="body2" sx={{ fontWeight: 600 }}>
                  {site.email}
                </Link>
              )}
            </Stack>
          </Grid>
          {footerLinks.map((col) => (
            <Grid key={col.title} size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                {col.title}
              </Typography>
              <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} underline="hover" color="text.secondary" variant="body2">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Typography variant="body2" color="text.secondary">
          © {year} {site.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
