'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { channelIcons } from '@/components/common/icons';
import { tint } from '@/theme/tint';
import { channels, heroHighlights, type ChannelKey } from '@/content/site';

const channelColor = Object.fromEntries(channels.map((c) => [c.key, c.color])) as Record<ChannelKey, string>;

const conversations: { name: string; channel: ChannelKey; message: string; time: string; unread?: boolean }[] = [
  { name: 'Aisha Khan', channel: 'whatsapp', message: 'Can I change my delivery slot to tomorrow?', time: '2m', unread: true },
  { name: 'Marco Rossi', channel: 'email', message: 'Invoice #4821 — request for GST copy', time: '6m', unread: true },
  { name: 'Lena Fischer', channel: 'instagram', message: 'Is the navy jacket back in stock?', time: '11m' },
  { name: 'James Carter', channel: 'sms', message: 'YES to confirm appointment', time: '18m' },
  { name: 'Sofia Lim', channel: 'chat', message: 'Thanks, that fixed the login issue!', time: '24m' },
];

function InboxMock() {
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        borderRadius: 4,
        border: 1,
        borderColor: 'divider',
        overflow: 'hidden',
        boxShadow: `0 40px 80px -20px ${alpha('#0A1024', 0.25)}`,
        ...theme.applyStyles('dark', { boxShadow: `0 40px 80px -20px ${alpha('#000', 0.6)}` }),
      })}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', px: 2, py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
        ))}
        <Typography variant="caption" color="text.secondary" sx={{ ml: 1.5, fontWeight: 600 }}>
          Unified Inbox · 128 open
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} sx={{ px: 2, py: 1.5, overflow: 'hidden' }}>
        {(['whatsapp', 'email', 'instagram', 'sms', 'chat'] as ChannelKey[]).map((key) => {
          const Icon = channelIcons[key];
          return (
            <Chip
              key={key}
              size="small"
              icon={<Icon sx={{ fontSize: 16, color: `${channelColor[key]} !important` }} />}
              label={channels.find((c) => c.key === key)!.name.split(' ')[0]}
              variant="outlined"
            />
          );
        })}
      </Stack>

      <Box>
        {conversations.map((c, i) => {
          const Icon = channelIcons[c.channel];
          return (
            <Stack
              key={c.name}
              direction="row"
              spacing={1.5}
              sx={{
                px: 2,
                py: 1.5,
                alignItems: 'center',
                borderTop: 1,
                borderColor: 'divider',
                bgcolor: i === 0 ? tint('primary', 0.06) : 'transparent',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Avatar sx={{ width: 36, height: 36, fontSize: 14, bgcolor: alpha(channelColor[c.channel], 0.15), color: channelColor[c.channel] }}>
                  {c.name.split(' ').map((p) => p[0]).join('')}
                </Avatar>
                <Box sx={{ position: 'absolute', right: -4, bottom: -4, bgcolor: 'background.paper', borderRadius: '50%', p: '2px', display: 'flex' }}>
                  <Icon sx={{ fontSize: 14, color: channelColor[c.channel] }} />
                </Box>
              </Box>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: c.unread ? 700 : 600 }} noWrap>
                  {c.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap component="p">
                  {c.message}
                </Typography>
              </Box>
              <Stack sx={{ alignItems: 'flex-end' }} spacing={0.5}>
                <Typography variant="caption" color="text.secondary">
                  {c.time}
                </Typography>
                {c.unread && <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />}
              </Stack>
            </Stack>
          );
        })}
      </Box>

      <Stack direction="row" spacing={1.5} sx={{ m: 2, p: 1.5, borderRadius: 2, alignItems: 'flex-start', bgcolor: tint('secondary', 0.1) }}>
        <AutoAwesomeIcon sx={{ fontSize: 18, color: 'secondary.main', mt: '2px' }} />
        <Typography variant="caption" sx={{ lineHeight: 1.5 }}>
          <strong>AI suggestion:</strong> Offer Aisha the 10:00–12:00 slot tomorrow — intent “reschedule”, sentiment positive.
        </Typography>
      </Stack>
    </Paper>
  );
}

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="home-title"
      sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 16, md: 20 }, pb: { xs: 10, md: 14 }, scrollMarginTop: 72 }}
    >
      {/* Decorative background: soft brand glow + fading grid */}
      <Box
        aria-hidden
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: `radial-gradient(60% 50% at 70% 10%, ${alpha('#3355FF', 0.18)}, transparent 70%), radial-gradient(40% 40% at 10% 30%, ${alpha('#12B5A6', 0.14)}, transparent 70%)`,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${theme.vars.palette.divider} 1px, transparent 1px), linear-gradient(90deg, ${theme.vars.palette.divider} 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)',
          },
        })}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3.5}>
              <Chip
                label="Early access · Join the waitlist for our beta"
                color="primary"
                variant="outlined"
                icon={<AutoAwesomeIcon />}
                sx={{ alignSelf: 'flex-start', bgcolor: tint('primary', 0.06), height: 'auto', py: 0.75, '& .MuiChip-label': { whiteSpace: 'normal' } }}
              />
              <Typography id="home-title" variant="h1" sx={{ fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' } }}>
                Every channel.{' '}
                <Box
                  component="span"
                  sx={{ background: 'linear-gradient(90deg, #3355FF, #12B5A6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                  One conversation.
                </Box>
              </Typography>
              <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6, maxWidth: 540 }}>
                ClaraFord is building one inbox for WhatsApp, email, SMS, social and live chat, with
                AI-assisted replies, automation and analytics. WhatsApp and email come first.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} href="#contact">
                  Join early access
                </Button>
                <Button variant="outlined" size="large" startIcon={<PlayCircleOutlineIcon />} href="#platform" color="inherit" sx={{ borderColor: 'divider' }}>
                  Explore the platform
                </Button>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Free during the beta · No credit card
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InboxMock />
            <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 1.5, textAlign: 'center' }}>
              Product preview · illustrative data
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          sx={{ mt: { xs: 10, md: 12 }, border: 1, borderColor: 'divider', borderRadius: 4, bgcolor: 'background.paper', overflow: 'hidden' }}
        >
          {heroHighlights.map((s, i) => (
            <Grid
              key={s.label}
              size={{ xs: 6, md: 3 }}
              sx={{
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                borderStyle: 'solid',
                borderColor: 'divider',
                borderWidth: 0,
                borderLeftWidth: { xs: i % 2 ? 1 : 0, md: i ? 1 : 0 },
                borderTopWidth: { xs: i > 1 ? 1 : 0, md: 0 },
              }}
            >
              <Typography variant="h3" component="p" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: 'primary.main' }}>
                {s.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
