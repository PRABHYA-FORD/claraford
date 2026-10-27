'use client';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { plans } from '@/content/site';

export default function Pricing() {
  return (
    <Section id="pricing" sx={{ bgcolor: 'background.paper', borderBlock: 1, borderColor: 'divider' }}>
      <SectionHeader
        eyebrow="Pricing"
        title={<span id="pricing-title">Free while we build it together</span>}
        subtitle="Early access is free during the beta. We will announce launch pricing in advance, so nothing changes without notice."
      />

      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {plans.map((plan) => (
          <Grid key={plan.name} size={{ xs: 12, md: 4 }}>
            <Card
              sx={[
                { height: '100%', position: 'relative', overflow: 'visible' },
                !!plan.highlighted && {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                  boxShadow: (t) => `0 30px 60px -30px rgba(${t.vars.palette.primary.mainChannel} / 0.5)`,
                },
              ]}
            >
              {plan.highlighted && (
                <Chip label="Open now" color="primary" size="small" sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }} />
              )}
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h3">
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, minHeight: 40 }}>
                  {plan.description}
                </Typography>

                <Typography variant="h3" component="p" sx={{ mt: 3 }}>
                  {plan.price}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, mb: 3 }}>
                  {plan.priceNote}
                </Typography>

                <Button variant={plan.highlighted ? 'contained' : 'outlined'} size="large" fullWidth href="#contact" sx={{ mb: 3 }}>
                  {plan.cta}
                </Button>

                <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {plan.features.map((f) => (
                    <Stack component="li" key={f} direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                      <Typography variant="body2">{f}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
