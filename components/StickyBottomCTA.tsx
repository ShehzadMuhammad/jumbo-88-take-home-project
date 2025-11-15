import { Box, Button, Paper, Typography } from '@mui/material';

type StickyBottomCTAProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
  onAction?: () => void;
};

const StickyBottomCTA = ({ title, subtitle, actionLabel, onAction }: StickyBottomCTAProps) => (
  <Paper
    elevation={12}
    sx={{
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      borderRadius: 0,
      background: 'rgba(15,17,21,0.95)',
      backdropFilter: 'blur(12px)',
      px: 3,
      py: 2,
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Box flex={1}>
        <Typography variant="subtitle2" color="success.main" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onAction}
        sx={{
          minWidth: 180,
          py: 1.3,
          boxShadow: '0 12px 30px rgba(0,255,170,0.4)',
        }}
      >
        {actionLabel}
      </Button>
    </Box>
  </Paper>
);

export default StickyBottomCTA;

