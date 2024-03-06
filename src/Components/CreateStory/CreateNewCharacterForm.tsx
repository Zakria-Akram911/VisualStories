import React from "react";
import { Box, Select, MenuItem, styled } from "@mui/material";
import "../../utility/createStoryFormStyles.css";

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
  gender: string;
  age: number;
  skinColor: string;
  eyeColor: string;
  selectRegion: string;
  checked: boolean;
}

interface CreateNewCharacterFormProps {
  formSubmitted: boolean;
  setFormSubmitted: (value: boolean) => void;
}
const CreateNewCharacterForm: React.FC<CreateNewCharacterFormProps> = ({
  formSubmitted,
  setFormSubmitted,
}) => {
  const [formData, setFormData] = React.useState<formData>({
    gender: "",
    age: 0,
    skinColor: "",
    eyeColor: "",
    selectRegion: "",
    checked: false,
  });

  const handleChange = (e: any): void => {
    const { name, value, type } = e.target;
    if (type == "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e.target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onFormSubmitHandler = () => {
    console.log(formData);
  };

  if (formSubmitted) {
    if (
      formData.gender &&
      formData.age &&
      formData.eyeColor &&
      formData.selectRegion &&
      formData.eyeColor
    ) {
      onFormSubmitHandler();
      setFormSubmitted(false);
    }
  }
  return (
    <Box>
      <form onSubmit={onFormSubmitHandler}>
        <Box className="create-story-with-storyline-textfield">
          <label>Gender for the character</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="gender"
            value={formData.gender}
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
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="rather-not-say">Rather not say</MenuItem>
          </CustomSelect>
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Age</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="age"
            value={formData.age <= 0 ? "" : formData.age}
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
            <MenuItem value="1-10">Between 1-10 years</MenuItem>
            <MenuItem value="11-20">Between 11-20 years</MenuItem>
            <MenuItem value="21-30">Between 21-30 years</MenuItem>
            <MenuItem value="31-40">Between 31-40 years</MenuItem>
            <MenuItem value="41-50">Between 41-50 years</MenuItem>
            <MenuItem value="50+">50+ years</MenuItem>
          </CustomSelect>
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Skin Color</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="skinColor"
            value={formData.skinColor}
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
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="brown">Brown</MenuItem>
            <MenuItem value="dark-brown">Dark Brown</MenuItem>
            <MenuItem value="beige">Beige</MenuItem>
            <MenuItem value="honey">Honey</MenuItem>
            <MenuItem value="umber">Umber</MenuItem>
            <MenuItem value="golden">Golden</MenuItem>
            <MenuItem value="rather-not-say">Rather not say</MenuItem>
          </CustomSelect>
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Eye colour</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="eyeColor"
            value={formData.eyeColor}
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
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="brown">Brown</MenuItem>
            <MenuItem value="dark-brown">Dark Brown</MenuItem>
            <MenuItem value="beige">Beige</MenuItem>
            <MenuItem value="honey">Honey</MenuItem>
            <MenuItem value="umber">Umber</MenuItem>
            <MenuItem value="golden">Golden</MenuItem>
            <MenuItem value="rather-not-say">Rather not say</MenuItem>
          </CustomSelect>
        </Box>
        <Box className="create-story-with-storyline-textfield">
          <label>Select Region</label>
          <CustomSelect
            fullWidth
            sx={{
              backgroundColor: "rgba(164, 117, 65, 0.28)",
              color: "#252525",
              border: "1px solid rgba(35, 35, 35, 0.57)",
              borderRadius: "0",
            }}
            name="selectRegion"
            value={formData.selectRegion}
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
            <MenuItem value="american">American</MenuItem>
            <MenuItem value="european">European</MenuItem>
            <MenuItem value="asian">Asian</MenuItem>
            <MenuItem value="austrailian">Austrailian</MenuItem>
          </CustomSelect>
        </Box>
        <Box
          className="create-story-with-storyline-textfield"
          sx={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <input
            type="checkbox"
            className="create-story-with-storyline-inputfield"
            style={{
              width: "20px",
              height: "20px",
              accentColor: "transparent",
              margin: "0",
            }}
            name="checked"
            checked={formData.checked}
            onChange={handleChange}
          />
          <label>
            Would you like to save your character? (This allows you to use your
            characters in future stories)
          </label>
        </Box>
        {/* <button type="submit">submit</button> */}
      </form>
    </Box>
  );
};

export default CreateNewCharacterForm;
