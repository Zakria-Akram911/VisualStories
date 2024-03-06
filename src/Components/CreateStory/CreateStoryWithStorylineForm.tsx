import { Box, styled, MenuItem, Select } from "@mui/material";
import "../../utility/createStoryFormStyles.css";
import React from "react";

const CustomSelect = styled(Select)(({}) => ({
  "& .MuiSelect-root": {
    backgroundColor: "rgba(164, 117, 65, 0.28)",
    color: "#252525",
    border: "1px solid rgba(35, 35, 35, 0.57)",
    borderRadius: "0",
  },
  "& .MuiSelect-outlined": {
    padding: "22.5px 14px",
    fontSize: "18px",
  },
}));

interface formData {
  topic: string;
  type: string;
  theme: string;
  numberOfParagraph: number;
}

interface CreateStoryWithStorylineFormProps {
  formSubmitted: boolean;
  setFormSubmitted: any;
}

const CreateStoryWithStorylineForm: React.FC<
  CreateStoryWithStorylineFormProps
> = ({ formSubmitted, setFormSubmitted }) => {
  const [formData, setFormData] = React.useState<formData>({
    topic: "",
    type: "",
    theme: "",
    numberOfParagraph: 0,
  });

  const handleChange = (
    e: any
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = () => {
    console.log(formData);
  };

  if (formSubmitted) {
    formSubmitHandler();
    setFormSubmitted(false);
  }
  return (
    <Box>
      <form onSubmit={formSubmitHandler}>
        <Box className="create-story-with-storyline-textfield">
          <label>What do you want the story to be about?</label>
          <textarea
            className="create-story-with-storyline-textarea"
            rows={8}
            style={{ resize: "none" }}
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          />
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Story Type</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="type"
            value={formData.type}
            onChange={handleChange}
            displayEmpty
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "rgb(231, 209, 161)",
                  color: "#252525",
                },
              },
            }}
          >
            <MenuItem value="comedy">Comedy</MenuItem>
            <MenuItem value="horror">Horror</MenuItem>
            <MenuItem value="quest">Quest</MenuItem>
            <MenuItem value="tragedy">Tragedy</MenuItem>
            <MenuItem value="fantasy">Fantasy</MenuItem>
            <MenuItem value="biography">Biography</MenuItem>
          </CustomSelect>
          {/* <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    /> */}
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Select the Theme of the Story</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            displayEmpty
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "rgb(231, 209, 161)",
                  color: "#252525",
                },
              },
            }}
          >
            <MenuItem value="death">Death</MenuItem>
            <MenuItem value="family">Family</MenuItem>
            <MenuItem value="survival">Survival</MenuItem>
            <MenuItem value="love">Love</MenuItem>
            <MenuItem value="friendship">Friendship</MenuItem>
            <MenuItem value="powerandcorruption">Power and Corruption</MenuItem>
          </CustomSelect>
          {/* <input
            type="text"
            className="create-story-with-storyline-inputfield"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          /> */}
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>How many paragraphs do you want in the story?</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="numberOfParagraph"
            value={
              formData.numberOfParagraph <= 0 ? "" : formData.numberOfParagraph
            }
            onChange={handleChange}
            displayEmpty
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "rgb(231, 209, 161)",
                  color: "#252525",
                },
              },
            }}
          >
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10+">10+</MenuItem>
          </CustomSelect>
          {/* <input
            type="number"
            className="create-story-with-storyline-inputfield"
            name="numberOfParagraph"
            value={
              formData.numberOfParagraph <= 0 ? "" : formData.numberOfParagraph
            }
            onChange={handleChange}
          /> */}
        </Box>
        {/* <input type="submit" /> */}
      </form>
    </Box>
  );
};

export default CreateStoryWithStorylineForm;
