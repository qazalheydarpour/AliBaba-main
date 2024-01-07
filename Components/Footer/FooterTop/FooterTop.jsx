import { Container, Box, Grid, Item, Typography, Button } from "@mui/material";
import Image from "next/image";
import ticketIcon from "../../../asset/icon/ticket.jpg";
import pcmobileIcon from "../../../asset/icon/pcmobile.jpg";
import discuss from "../../../asset/icon/discuss.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DownloadIcon from '@mui/icons-material/Download';

const FooterTop = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "right",
          display: "flex",
          alignItems: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={5} sx={{mb:5}}>
          <Grid item xs={12} sm={4} sx={{ mt: "10px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"همسفر همه لحظات سفر"}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.500",
                    fontSize: "0.8rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر"}
                </Typography>
              </Box>
              <Image width={89} height={89} src={discuss} alt="ticketIcon" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"همسفر هر سفر"}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.500",
                    fontSize: "0.8rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)"}
                </Typography>
              </Box>
              <Image
                width={89}
                height={89}
                src={pcmobileIcon}
                alt="ticketIcon"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"رتبه یک سفر"}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.500",
                    fontSize: "0.8rem",
                    fontFamily: "Alibaba",
                  }}
                >
                  {"معتبرترین عرضه‌کننده محصولات گردشگری در ایران"}
                </Typography>
              </Box>
              <Image width={89} height={89} src={ticketIcon} alt="ticketIcon" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "right", display: "flex", alignItems: "center" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} sx={{ mt: "10px" }}>
            <Grid container spacing={1}>
              <Grid item xs={3} sm={3} sx={{ mt: "10px" }}>
                <Button sx={{ border: 1, borderColor: "grey.500" }}>
                  <Typography
                    sx={{
                      fontFamily: "Alibaba",
                      fontSize: "0.8rem",
                      marginRight: 1,
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {"دانلود مستقیم"}
                  </Typography>
                  <DownloadIcon sx={{color:"black",width:"20px",height:"20px"}}/>
                </Button>
              </Grid>
              <Grid item xs={3} sm={3} sx={{ mt: "10px" }}>
                <Button sx={{ border: 1, borderColor: "grey.500" }}>
                  <Typography
                    sx={{
                      fontFamily: "Alibaba",
                      fontSize: "0.8rem",
                      marginRight: 1,
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {"سیب اپ"}
                  </Typography>
                  <Image
                    width="20px"
                    height="20px"
                    src={
                      "https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-sibapp-11ae58c3.svg"
                    }
                    alt="bazar"
                  />
                </Button>
              </Grid>
              <Grid item xs={3} sm={3} sx={{ mt: "10px" }}>
                <Button sx={{ border: 1, borderColor: "grey.500" }}>
                  <Typography
                    sx={{
                      fontFamily: "Alibaba",
                      fontSize: "0.8rem",
                      marginRight: 1,
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {"مایکت"}
                  </Typography>
                  <Image
                    width="20px"
                    height="20px"
                    src={
                      "https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-myket-99dcd02e.svg"
                    }
                    alt="bazar"
                  />
                </Button>
              </Grid>
              <Grid item xs={3} sm={3} sx={{ mt: "10px" }}>
                <Button sx={{ border: 1, borderColor: "grey.500" }}>
                  <Typography
                    sx={{
                      fontFamily: "Alibaba",
                      fontSize: "0.8rem",
                      marginRight: 1,
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {"کافه بازار"}
                  </Typography>
                  <Image
                    width="20px"
                    height="20px"
                    src={
                      "https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-bazar-cb09f55a.svg"
                    }
                    alt="bazar"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "Alibaba",
              }}
            >
              {"اپلیکیشن علی‌بابا"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: 15, color: "blue" }} />
              <Typography
                sx={{
                  textAlign: "right",
                  color: "blue",
                  fontSize: "0.8rem",
                  fontFamily: "Alibaba",
                }}
              >
                {"مشاهده همه قابلیت ها"}
              </Typography>
              <Typography
                sx={{
                  textAlign: "right",
                  color: "grey.500",
                  fontSize: "0.8rem",
                  fontFamily: "Alibaba",
                }}
              >
                {".با نصب اپلیکیشن علی‌بابا بلیط همه سفرها در جیب شماست"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FooterTop;
