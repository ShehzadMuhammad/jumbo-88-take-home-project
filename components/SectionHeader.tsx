import { Box, Typography } from '@mui/material';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <Box mb={3}>
    <Typography
      variant="overline"
      color="success.main"
      letterSpacing={2}
      fontWeight={700}
      sx={{ textTransform: 'uppercase' }}
    >
      {eyebrow}
    </Typography>
    <Typography variant="h4" fontWeight={800}>
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" mt={1}>
        {description}
      </Typography>
    )}
  </Box>
);

export default SectionHeader;

