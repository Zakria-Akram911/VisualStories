import { Grid, useMediaQuery } from "@mui/material";
import MyStoriesCard from "./MyStoriesCard";
import { useNavigate } from "react-router";

const MyStories = ({ myStories }: any) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <Grid container justifyContent="space-between">
      {myStories.map((story: any) => (
        <Grid
          item
          xs={12}
          md={5.7}
          mb={isMobile ? "10px" : "20px"}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/your-story/${story.id}`);
          }}
        >
          <MyStoriesCard
            title={story.title}
            thumbnailImage={story.thumbnailImage}
            shortDesc={story.shortDesc}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyStories;
