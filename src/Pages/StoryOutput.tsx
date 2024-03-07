import NavBar from "../Components/NavBar";
import Layout from "./LayoutPages";
import bgImage from "../assets/story-output-bg.png";
import StoryOutputMain from "../Components/StoryOutput/StoryOutputMain";
import { Box, useMediaQuery } from "@mui/material";

const StoryOutput = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Layout>
      <NavBar background={bgImage}>
        <Box sx={{marginTop:isMobile ? "-30px" : "inherit"}}>
            <StoryOutputMain />
          </Box>
      </NavBar>
    </Layout>
  );
};

export default StoryOutput;
