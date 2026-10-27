import Box, { type BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { SectionId } from '@/content/site';

type Props = BoxProps & { id: SectionId; children: React.ReactNode };

/** Anchored page section; scroll-margin keeps headings clear of the fixed navbar. */
export default function Section({ id, children, sx, ...rest }: Props) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-title`}
      sx={[{ py: { xs: 10, md: 14 }, scrollMarginTop: 72, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
