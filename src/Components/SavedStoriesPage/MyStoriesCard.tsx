import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface MyStoriesCard {
  title: string;
  thumbnailImage: any;
  shortDesc: string;
}

const MyStoriesCard: React.FC<MyStoriesCard> = ({
  title,
  thumbnailImage,
  shortDesc,
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
            p: isMobile ? "5px 20px" : "5px 40px",
            borderRadius: "24px",
            textAlign:"center"
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box className="my-stories-short-desc" m="20px 0px">
        <Typography color="#452C0E" fontSize="16px">
          {shortDesc}
        </Typography>
      </Box>
    </Box>
  );
};

export default MyStoriesCard;
