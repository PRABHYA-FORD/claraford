'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { channelIcons } from '@/components/common/icons';
import { channels } from '@/content/site';

export default function Channels() {
  return (
    <Section id="channels" sx={{ bgcolor: 'background.paper', borderBlock: 1, borderColor: 'divider' }}>
      <SectionHeader
        eyebrow="Channels"
        title={<span id="channels-title">Meet customers wherever they already are</span>}
        subtitle="Eight channels on the roadmap, one inbox. We are starting with WhatsApp and email, then adding the rest based on what early-access teams need."
      />
      <Grid container spacing={3}>
        {channels.map((c) => {
          const Icon = channelIcons[c.key];
          return (
            <Grid key={c.key} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 200ms, box-shadow 200ms, border-color 200ms',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: alpha(c.color, 0.5), boxShadow: `0 18px 40px -18px ${alpha(c.color, 0.45)}` },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: 3, display: 'grid', placeItems: 'center', bgcolor: alpha(c.color, 0.12), color: c.color }}>
                        <Icon />
                      </Box>
                      {c.status === 'early-access' ? (
                        <Chip label="Early access" size="small" color="secondary" />
                      ) : (
                        <Chip label="Roadmap" size="small" variant="outlined" />
                      )}
                    </Stack>
                    <Typography variant="h6" component="h3">
                      {c.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {c.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
