import { Box, Container, Button, Typography } from "@mui/material";
import theme from "../../styles/theme";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
let warningText="طبق اعلام سازمان هواپیمایی کشوری، از پرواز افرادی که تا ۱۴ روز قبل از تاریخ پرواز تست کرونای مثبت داشته‌اند، جلوگیری می‌شود. مسئولیت عدم پذیرش مسافران و همچنین هزینه‌ استرداد در این شرایط به عهده مسافر است. اطلاعات بیشتر درباره محدودیت‌های تردد را در alibaba.ir/mag مشاهده کنید."
const TicketWarning = () => {
  return (
      <Box sx={{border:1,borderColor:"#ffce85",borderRadius:"0.5rem",backgroundColor:"#fff5e5",display:"flex",alignItems:"Center",p:2,mb:3}}>
          <Typography sx={{color:"#a85d00",textAlign:"right",fontSize:"0.9rem"}}>{warningText}</Typography>

          <ReportGmailerrorredIcon sx={{color:"#a85d00"}}/>
      </Box>
  )
}

export default TicketWarning