import { Box, Typography, useMediaQuery } from "@mui/material";
import cardBottomImage from "../../assets/card-design.png";

const VisualizerCard = ({ cardImage, text }: any) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const mediumScreen = useMediaQuery(
    "(min-width:901px) and (max-width:1501px)"
  );
  return (
    <Box
      className="cardBackground"
      sx={{
        background: "rgba(40,40,40,0.56)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "24px",
        p: "40px 0px",
      }}
    >
      <Box
        className="cardImage"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          component="img"
          src={cardImage}
          sx={{
            maxWidth: isMobile ? "70%" : mediumScreen ? "70%" : "100%",
            m: mediumScreen ? "0 auto" : "inherit",
          }}
        />
      </Box>
      <Box
        className="cardText"
        sx={{
          display: "flex",
          justifyContent: "center",
          m: "25px 0px",
          maxWidth: isMobile ? "80%":mediumScreen? "80%" : "60%",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: isMobile ? "14px" : mediumScreen ? "16px" : "24px",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}> 
        <Box component="img" src={cardBottomImage} sx={{maxWidth: isMobile ? "70%" : mediumScreen ? "70%" : "100%",}} />
      </Box>
    </Box>
  );
};

export default VisualizerCard;
