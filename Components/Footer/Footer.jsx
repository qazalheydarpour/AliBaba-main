import { Container, Box, Grid, Item, Typography } from "@mui/material";
import theme from "../../styles/theme";
import FooterLastPart from "./FooterLastPart/FooterLastPart";
import FooterTop from './FooterTop/FooterTop'
import FooterMid from "./FooterMid/FooterMid";

const Footer = () => {
  return (
    <>
      <Box
        bgcolor={theme.palette.white.main}
        sx={{ borderTop: 1, borderColor: "grey.500" }}
      >
        <Container maxWidth="lg">
          <FooterTop/>
          <FooterMid/>
          <FooterLastPart />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
