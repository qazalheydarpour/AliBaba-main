import { Container, Box, Grid, Item,Typography,Button } from "@mui/material";
import theme from "../../../styles/theme";
import Image from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AlibabaTypo from '../../../asset/icon/alibabaTypo.svg'
const FooterMid = () => {
  return (
    <>
      <Box
        sx={{ borderTop: 1, borderColor: "grey.500", mt: 3}}
      >
        <Grid container spacing={5} sx={{ textAlign: "right" }}>
          <Grid item xs={12} sm={6} sx={{ mt: 1,textAlign: "left",mt: 2}}>
            <Box>
            <Image height="30" width="200" src={AlibabaTypo} alt="alibaba logo" sx={{maxWidth:"100%"}}/>
            <Typography sx={{fontFamily:'Alibaba',color:"black",fontSize:"0.8rem",mt:2}}>
                {"تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰ |۰۲۱ - ۴۹۲۷۵۰۰۰"}
            </Typography>
            <Typography sx={{fontFamily:'Alibaba',color:"black",fontSize:"0.8rem",mt:1}}>
                {"دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴"}
            </Typography>
            <Box>
                <Grid container sx={{mt:5}}>
                    <Button sx={{ border: 1 ,borderColor: 'grey.500',mr:1}}>
                        <Image width={50} height={50} src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/state-airline-f45c55b2.svg" alt="some alt"/>
                    </Button>
                    <Button sx={{ border: 1 ,borderColor: 'grey.500',mr:1}}>
                        <Image width={50} height={50} src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/aira-682b7c43.png" alt="some alt"/>
                    </Button>
                    <Button sx={{ border: 1 ,borderColor: 'grey.500',mr:1}}>
                        <Image width={50} height={50} src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/passenger-rights-dd64d114.svg" alt="some alt"/>
                    </Button>
                    <Button sx={{ border: 1 ,borderColor: 'grey.500',mr:1}}>
                        <Image width={50} height={50} src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/samandehi-6e2b448a.png" alt="some alt"/>
                    </Button>
                    <Button sx={{ border: 1 ,borderColor: 'grey.500'}}>
                        <Image width={50} height={50} src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/ecunion-8b792f56.png" alt="some alt"/>
                    </Button>
                </Grid>
            </Box>
            </Box>
            
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
            <Grid container spacing={5} sx={{ textAlign: "right" }}>
              <Grid item xs={4} sx={{ mt: 1 }}>
                <Typography sx={{fontFamily:'Alibaba',fontWeight:"bold",fontSize:"0.8rem"}}>{"اطلاعات تکمیلی"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:2}}>{"باشگاه مشتریان"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"فروش سازمانی"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"همکاری با آژانس‌ها"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"فرصت‌های شغلی"}</Typography>
              </Grid>
              <Grid item xs={4} sx={{ mt: 1 }}>
                <Typography sx={{fontFamily:'Alibaba',fontWeight:"bold",fontSize:"0.8rem"}}>{"راهنما"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:2}}>{"راهنمای خرید"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"راهنمای استرداد بلیط"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"قوانین و مقررات"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"پرسش و پاسخ"}</Typography>
              </Grid>
              <Grid item xs={4} sx={{ mt: 1 }}>
                <Typography sx={{fontFamily:'Alibaba',fontWeight:"bold",fontSize:"0.8rem"}}>{"علی‌بابا"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:2}}>{"درباره ما"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"تماس با ما"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"چرا علی‌بابا"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"علی بابا پلاس"}</Typography>
                <Typography sx={{fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"مجله علی‌بابا"}</Typography>
              </Grid>
            </Grid>
            <Typography sx={{color:'grey.500',textAlign: "right",fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>{"... · بلیط چارتر · تور کیش · تور استانبول · اجاره ویلا جاباما · بلیط قطار · خرید بلیط هواپیما خارجی"}</Typography>
            <Box sx={{display: "flex", alignItems: "center",float:"right" }}>
                <KeyboardArrowDownIcon/>
                <Typography sx={{color:'blue',fontFamily:'Alibaba',fontSize:"0.8rem",mt:1}}>بیشتر</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FooterMid;
