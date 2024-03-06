import { Grid, useMediaQuery } from "@mui/material";
import MyCharacterCard from "./MyCharacterCard";

const MyCharacters = ({myCharacters}: any) => {
  const isMobile = useMediaQuery("(max-width:900px)")
  return (
    <Grid container justifyContent="space-between">
      {myCharacters.map((character: any)=>(
        <Grid item xs={12} md={5.7} mb={isMobile? "30px":"50px"}>
            <MyCharacterCard
              title={character.title} 
              thumbnailImage={character.thumbnailImage} 
            />
        </Grid>
      ))}
    </Grid>
  )
}

export default MyCharacters