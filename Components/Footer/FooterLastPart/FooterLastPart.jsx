import { Container, Box, Grid, Item } from "@mui/material";
import theme from "../../../styles/theme";
import { fontSize } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const FooterLastPart = () => {
  return (
    <Box
      sx={{ borderTop: 1, borderColor: "grey.500", mt: 3, color: "grey.500"}}
    >
      <Grid container spacing={5} >
        <Grid item xs={12} sm={4} sx={{mt:"10px"}}>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <LinkedInIcon />
              </Grid>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <InstagramIcon />
              </Grid>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <LiveTvIcon />
              </Grid>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <TwitterIcon />
              </Grid>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <YouTubeIcon />
              </Grid>
              <Grid item xs={1} sx={{ marginRight: "10px" }}>
                <TelegramIcon />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} sx={{mt:"10px"}}>
          <Box sx={{ fontSize: "0.75rem", textAlign: "right" }}>
            {
              "کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.38.4)"
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterLastPart;
