import { Box, Typography } from "@mui/material";

import "./App.css";
import { ContactInfo } from "./components/ContactInfo";
import { ToastContainer } from "react-toastify";
import { ABOUT_ME, experience } from "./utils/constants";
import { TechCarousel } from "./components/TechCarousel";
import { ExperienceCard } from "./components/ExperienceCard";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <ContactInfo />
      <Box
        flex={1}
        sx={{ alignSelf: "start", textAlign: "justify", maxWidth: "50rem" }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {"About me"}
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>{ABOUT_ME}</Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold", textAlign: "justify" }}
        >
          {"Tech Stack"}
        </Typography>
        <TechCarousel />
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold", textAlign: "justify" }}
        >
          {"Experience"}
        </Typography>
        <ExperienceCard experiences={experience} />
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold", textAlign: "justify" }}
        >
          {" "}
          Projects
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold", textAlign: "justify" }}
        >
          {" "}
          Education
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold", textAlign: "justify" }}
        >
          {" "}
        </Typography>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default App;
