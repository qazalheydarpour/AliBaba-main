import { Box, Container, Button, Typography,TextField } from "@mui/material";
import theme from "../../styles/theme";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

let notifyText="در صورت پر کردن این فرم، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد شد. همچنین «درخواست تغییرات بلیط» یا «دریافت تاییدیه» از طریق هر دو کانال‌های «شماره تماس حساب کاربری» یا «شماره تماس همین فرم» قابل انجام خواهد بود و علی‌بابا متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم هر دو کانال را در دسترس نگه دارید."
const Notify = () => {
  const [checked, setChecked] = React.useState(false);
  const notifyCheckHandler = (e) => {
    setChecked(e.target.checked);
  };
  if (!checked) {
    return (
      <Box
        sx={{
          border: 1,
          borderColor: "grey.500",
          borderRadius: "1rem",
          mb: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography>ارسال بلیط به ایمیل و شماره همراه دیگر</Typography>
        <Checkbox
          checked={checked}
          onChange={(e) => notifyCheckHandler(e)}
          color="secondary"
        />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          border: 1,
          borderColor: "grey.500",
          borderRadius: "1rem",
          mb: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
        <TextField id="outlined-basic" label="تلفن همراه" variant="outlined" color="secondary" sx={{mr:1}} />
        <TextField id="outlined-basic" label="ایمیل" color="secondary" variant="outlined" />

        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" ,width:"49%" }}>
          <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}>
            <Typography>ارسال بلیط به ایمیل و شماره همراه دیگر</Typography>
            <Checkbox
              checked={checked}
              onChange={(e) => notifyCheckHandler(e)}
              color="secondary"
            />
          </Box>
          <Typography sx={{fontSize:"0.8rem",fontColor:"grey.500",textAlign:"right"}}>
              {notifyText}
          </Typography>
        </Box>
      </Box>
    );
  }
};

export default Notify;
