import { Box, Container, Button, Typography, Avatar } from "@mui/material";
import theme from "../../../styles/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const FlightDetail = () => {
  return (
    <Box sx={{ width: "100%", p: 2, display: "flex", flexDirection: "column" }}>
      <Box sx={{ mb: 2 }}>
        <Box
          component="span"
          sx={{
            ml: 1,
            background: "#e8f9fc",
            pr: 1,
            pl: 1,
            float: "right",
            display: "flex",
            borderRadius: "2rem",
          }}
        >
          <Typography>بلیط رفت</Typography>
          <CheckCircleIcon sx={{ color: "#0F697A" }} />
        </Box>
        <Typography sx={{ float: "right" }}>جمعه، 29 بهمن</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            mr: 1,
            background: "#f8fafb",
            pr: 1,
            pl: 1,
            borderRadius: "1rem",
            fontSize: "0.7rem",
          }}
        >
          Boeing MD-80
        </Typography>
        <Typography
          sx={{
            mr: 1,
            background: "#f8fafb",
            pr: 1,
            pl: 1,
            borderRadius: "1rem",
            fontSize: "0.7rem",
          }}
        >
          اکونومی
        </Typography>
        <Typography
          sx={{
            mr: 1,
            background: "#f8fafb",
            pr: 1,
            pl: 1,
            borderRadius: "1rem",
            fontSize: "0.7rem",
          }}
        >
          سیستمی
        </Typography>
        <Typography
          sx={{
            mr: 1,
            background: "#f8fafb",
            pr: 1,
            pl: 1,
            borderRadius: "1rem",
            fontSize: "0.7rem",
          }}
        >
          تابان
        </Typography>
        <Avatar
          sx={{ float: "right" }}
          alt="flight"
          src="https://cdn.alibaba.ir/static/img/airlines/Domestic/HH.png"
        />
      </Box>
      <Box sx={{ width: "100%" ,display: "flex",justifyContent:"flex-end"}}>
        <Box fx={{  }}>
          <Typography>22:45</Typography>
          <Typography>شیراز</Typography>
        </Box>
        <Typography>----------------</Typography>
        <Box>
          <Typography>00:05</Typography>
          <Typography>تهران</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FlightDetail;
