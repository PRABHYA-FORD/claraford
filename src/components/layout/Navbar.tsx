'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '@/components/brand/Logo';
import ColorModeToggle from './ColorModeToggle';
import { navItems, type SectionId } from '@/content/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export const NAV_HEIGHT = 72;
const sectionIds = navItems.map((n) => n.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  const go = (id: SectionId) => (e: React.MouseEvent) => {
    setOpen(false);
    const target = document.getElementById(id);
    // On other pages (privacy, terms) the section isn't here: let the /#id link navigate home.
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'home' ? '/' : `#${id}`);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={(theme) => ({
          height: NAV_HEIGHT,
          justifyContent: 'center',
          backdropFilter: 'saturate(180%) blur(14px)',
          backgroundColor: scrolled ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.82)` : 'transparent',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'background-color 200ms, border-color 200ms',
        })}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <Box component="a" href="/" onClick={go('home')} aria-label="ClaraFord home" sx={{ display: 'flex', textDecoration: 'none', mr: 'auto' }}>
              <Logo />
            </Box>

            <Stack component="nav" aria-label="Primary" direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <Button
                    key={item.id}
                    href={`/#${item.id}`}
                    onClick={go(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      position: 'relative',
                      px: 1.75,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 14,
                        right: 14,
                        bottom: 4,
                        height: 2,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 200ms',
                      },
                      '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', ml: { md: 2 } }}>
              <ColorModeToggle />
              <Button href="/#contact" onClick={go('contact')} variant="contained" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                Join early access
              </Button>
              <IconButton aria-label="Open menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 300 } } }}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', px: 2.5, height: NAV_HEIGHT }}>
          <Logo size={30} />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List component="nav" aria-label="Mobile" sx={{ px: 1.5, py: 2 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              component="a"
              href={`/#${item.id}`}
              onClick={go(item.id)}
              selected={active === item.id}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2.5, mt: 'auto', pb: 3 }}>
          <Button fullWidth variant="contained" size="large" href="/#contact" onClick={go('contact')}>
            Join early access
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
