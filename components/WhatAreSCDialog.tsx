import { colors } from "@/constants";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

type WhatAreSCDialogProps = {
  open: boolean;
  onClose: () => void;
};

const WhatAreSCDialog = ({ open, onClose }: WhatAreSCDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        backgroundColor: colors.paperBg,
        color: colors.textPrimary,
      },
    }}
  >
    <DialogTitle sx={{ color: colors.textPrimary, fontWeight: 700 }}>
      What are Sweepstakes Coins?
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1" color="text.secondary" paragraph>
        Sweepstakes Coins (SCs) are promotional coins that can be redeemed for
        cash prizes when you play eligible games.
      </Typography>

      <Box mt={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Typography variant="h6">🟡</Typography>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            Gold Coins
          </Typography>
        </Box>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Play for free: No monetary value.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Gold Coins cannot be redeemed for real cash.
          </Typography>
        </Box>
      </Box>

      <Box mt={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Typography variant="h6">🟢</Typography>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            Sweepstakes Coins
          </Typography>
        </Box>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Always free: No purchase necessary.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Redeemable for real prizes.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            1 SC is redeemable for $1 USD.
          </Typography>
        </Box>
      </Box>

      <Box mt={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1} mb={1.5}>
          <Typography variant="h6">🎁</Typography>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            How do I get free Sweepstakes Coins?
          </Typography>
        </Box>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Social Competitions
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Refer a Friend
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Mail-In Request
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="li"
            sx={{ mb: 0.5 }}
          >
            Buy Gold Coins*
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
        mt={2}
        display="block"
      >
        *Promotional Free Sweepstakes Coins included with select Gold Coin
        packages. See full Sweepstakes rules for details.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="contained" color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default WhatAreSCDialog;

