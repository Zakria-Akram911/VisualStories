import NavBar from "../Components/NavBar";
import Layout from "./LayoutPages";
import bgImage from "../assets/story-output-bg.png";
import StoryOutputMain from "../Components/StoryOutput/StoryOutputMain";
import { Box, Button, useMediaQuery } from "@mui/material";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const StoryOutput = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const enterFullScreen = useFullScreenHandle();
  return (
    <Layout>
      <NavBar background={bgImage}>
        {isMobile ? (
          <>
            <Box>
              <FullScreen handle={enterFullScreen}>
                <Box
                  sx={{
                    background: enterFullScreen.active ? `url(${bgImage})` : "",
                    height: enterFullScreen.active ? "100vh" : "",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={
                      enterFullScreen.active
                        ? enterFullScreen.exit
                        : enterFullScreen.enter
                    }
                    variant="contained"
                    sx={{
                    borderRadius: "9px",
                    border: "3px solid #A67334",
                    background: "var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))",
                    color: "#47371F",
                  }}
                  >
                    {
                        enterFullScreen.active
                          ? "Exit Full Screen"
                          : "Enter Full Screen"
                      }
                  </Button>
                  <StoryOutputMain isFullScreen={enterFullScreen.active ? true : false} />
                </Box>
              </FullScreen>
            </Box>
          </>
        ) : (
          <Box sx={{}}>
            <StoryOutputMain />
          </Box>
        )}
      </NavBar>
    </Layout>
  );
};

export default StoryOutput;
