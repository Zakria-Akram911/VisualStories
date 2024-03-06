import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

interface myCharcterCard {
  title: string;
  thumbnailImage: any;
}

const MyCharacterCard: React.FC<myCharcterCard> = ({
  title,
  thumbnailImage,
}) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const mediumScreen = useMediaQuery(
    "(min-width:901px) and (max-width:1501px)"
  );
  return (
    <Box className="my-stories-card-main">
      <Box
        className="my-stories-thumnail-bg"
        sx={{
          background: `url(${thumbnailImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: isMobile ? "250px" : mediumScreen ? "280px" : "364px",
        }}
      >
        <Typography
          fontSize="24px"
          color="#452C0E"
          sx={{
            background: "rgba(239, 206, 141, 0.88)",
            p: "5px 40px",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MyCharacterCard;
