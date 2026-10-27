'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { featureIcons } from '@/components/common/icons';
import { earlyAccessBenefits, features, integrations, steps, type BenefitKey } from '@/content/site';
import { tint } from '@/theme/tint';

const benefitIcons: Record<BenefitKey, SvgIconComponent> = {
  free: CardGiftcardOutlinedIcon,
  roadmap: MapOutlinedIcon,
  team: SupportAgentOutlinedIcon,
};

export default function Platform() {
  return (
    <Section id="platform">
      <SectionHeader
        eyebrow="Platform"
        title={<span id="platform-title">Built for scale, designed for people</span>}
        subtitle="What we are building so service, sales and marketing teams can run every customer conversation from one place."
      />

      <Grid container spacing={3}>
        {features.map((f) => {
          const Icon = featureIcons[f.key];
          return (
            <Grid key={f.key} size={{ xs: 12, sm: 6, md: 4 }}>
              <Stack direction="row" spacing={2.5} sx={{ p: 3, height: '100%', borderRadius: 4, border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: 2.5, display: 'grid', placeItems: 'center', color: 'primary.main', bgcolor: tint('primary', 0.1) }}>
                  <Icon />
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.75, fontSize: '1.05rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      {/* How it works */}
      <Box
        sx={{
          mt: { xs: 10, md: 14 },
          p: { xs: 4, md: 7 },
          borderRadius: 6,
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0A1024 0%, #142057 55%, #1F3BD6 100%)',
        }}
      >
        <Box aria-hidden sx={{ position: 'absolute', right: -120, top: -120, width: 360, height: 360, borderRadius: '50%', bgcolor: 'rgba(18,181,166,0.25)', filter: 'blur(80px)' }} />
        <Typography variant="overline" sx={{ color: '#7FE7DB' }}>
          How it works
        </Typography>
        <Typography variant="h3" component="h3" sx={{ mt: 1, mb: 6, maxWidth: 560, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
          From scattered apps to one shared inbox in four steps
        </Typography>
        <Grid container spacing={4}>
          {steps.map((s, i) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack spacing={1.5} sx={{ position: 'relative' }}>
                <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: '#7FE7DB' }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Box sx={{ height: 2, bgcolor: 'rgba(255,255,255,0.18)', borderRadius: 1 }}>
                  <Box sx={{ height: 2, width: `${(i + 1) * 25}%`, bgcolor: '#2DD4BF', borderRadius: 1 }} />
                </Box>
                <Typography variant="h6" component="h4">
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                  {s.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" useFlexGap sx={{ mt: 6, flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', mr: 1 }}>
            Integrations on the roadmap:
          </Typography>
          {integrations.map((name) => (
            <Chip key={name} label={name} size="small" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)' }} />
          ))}
        </Stack>
      </Box>

      {/* Early-access benefits */}
      <Typography variant="h4" component="h3" sx={{ mt: { xs: 8, md: 10 }, mb: 4, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}>
        Why join early access
      </Typography>
      <Grid container spacing={3}>
        {earlyAccessBenefits.map((b) => {
          const Icon = benefitIcons[b.key];
          return (
            <Grid key={b.key} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ width: 48, height: 48, mb: 2.5, borderRadius: 3, display: 'grid', placeItems: 'center', color: 'secondary.main', bgcolor: tint('secondary', 0.12) }}>
                    <Icon />
                  </Box>
                  <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
                    {b.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {b.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
