'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { faqs, site } from '@/content/site';
import { HONEYPOT_FIELD, teamSizes, validateContact, type ContactErrors, type ContactInput } from '@/lib/contact';
import { tint } from '@/theme/tint';

const empty: ContactInput = { name: '', email: '', company: '', teamSize: '', message: '' };


export default function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInput, boolean>>>({});
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (field: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validateContact(next));
  };
  const blur = (field: keyof ContactInput) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateContact(values));
  };
  const fieldProps = (field: keyof ContactInput) => ({
    name: field,
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    error: Boolean(touched[field] && errors[field]),
    helperText: touched[field] ? errors[field] : undefined,
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched({ name: true, email: true, company: true, teamSize: true, message: true });
    if (Object.keys(found).length) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, [HONEYPOT_FIELD]: honeypot }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
      setValues(empty);
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <Grid container spacing={{ xs: 8, md: 8 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <SectionHeader
            align="left"
            eyebrow="Early access"
            title={<span id="contact-title">Be one of the first teams on ClaraFord</span>}
            subtitle="Tell us about your team and the channels you need. We are onboarding teams in small groups and will reach out when your spot opens."
          />
          {site.email && (
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mt: -3, mb: 6 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: 2, display: 'grid', placeItems: 'center', color: 'primary.main', bgcolor: tint('primary', 0.1) }}>
                <MailOutlineIcon fontSize="small" />
              </Box>
              <Typography component="a" href={`mailto:${site.email}`} sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'primary.main' } }}>
                {site.email}
              </Typography>
            </Stack>
          )}

          <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
            Frequently asked questions
          </Typography>
          {faqs.map((f, i) => (
            <Accordion key={f.q} defaultExpanded={i === 0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${i}-content`} id={`faq-${i}-header`}>
                <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {f.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
            <CardContent component="form" noValidate onSubmit={submit} sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                Request early access
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Takes under a minute. No credit card needed.
              </Typography>
              {/* Honeypot: hidden from people and assistive tech, catches naive bots. */}
              <Box aria-hidden sx={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label>
                  Website
                  <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </label>
              </Box>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Full name" autoComplete="name" required {...fieldProps('name')} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Work email" type="email" autoComplete="email" required {...fieldProps('email')} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Company" autoComplete="organization" required {...fieldProps('company')} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField select label="Team size" required {...fieldProps('teamSize')}>
                    {teamSizes.map((s) => (
                      <MenuItem key={s} value={s}>
                        {s} agents
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={12}>
                  <TextField label="Which channels do you need, and what should ClaraFord solve? (optional)" multiline minRows={4} {...fieldProps('message')} />
                </Grid>
                <Grid size={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={status === 'submitting'}
                    endIcon={status === 'submitting' ? <CircularProgress size={18} color="inherit" /> : <SendRoundedIcon />}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Join early access'}
                  </Button>
                  <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 1.5, textAlign: 'center' }}>
                    We only use your details to contact you about early access. See our{' '}
                    <Link href="/privacy">Privacy Policy</Link>.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={status === 'success' || status === 'error'}
        autoHideDuration={6000}
        onClose={() => setStatus('idle')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setStatus('idle')} severity={status === 'error' ? 'error' : 'success'} variant="filled" sx={{ width: '100%' }}>
          {status === 'error'
            ? `Something went wrong. Please try again${site.email ? ` or email ${site.email}` : ' in a few minutes'}.`
            : 'Thanks, you are on the list. We will be in touch when your early-access spot opens.'}
        </Alert>
      </Snackbar>
    </Section>
  );
}
