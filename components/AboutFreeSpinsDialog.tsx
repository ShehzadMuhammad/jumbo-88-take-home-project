import { colors } from "@/constants";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

type AboutFreeSpinsDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AboutFreeSpinsDialog = ({ open, onClose }: AboutFreeSpinsDialogProps) => (
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
      What are Free Spins?
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1" color="text.secondary" paragraph>
        Free Spins allow you to play games for free! They award you free rounds
        of play on select games.
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        fontWeight={600}
        mt={3}
        mb={1}
      >
        How do I get Free Spins?
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Any bonus with a Free Spin award will automatically be credited to your
        account once redeemed or purchased. This is indicated by the green
        &quot;Free Spin&quot; banner in the bonus.
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        They can also be awarded for various other events and promotions. Stay
        tuned!
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        fontWeight={600}
        mt={3}
        mb={1}
      >
        I see a bonus has a Free Spin award, but I don&apos;t see any games
        listed.
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        By pressing or clicking the green &quot;Free Spin&quot; banner in the
        bonus, you should be able to see a list of games that will be awarded
        with Free Spins.
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        fontWeight={600}
        mt={3}
        mb={1}
      >
        I got some Free Spins but can&apos;t find the game they&apos;re for!
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Visit the Free Spins page to see which Free Spins are available to play.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="contained" color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default AboutFreeSpinsDialog;
