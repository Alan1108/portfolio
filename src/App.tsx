import { Box, Typography } from "@mui/material";

import "./App.css";
import { ContactInfo } from "./components/ContactInfo";
import { ToastContainer } from "react-toastify";

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
      <Box flex={1}>
        <ContactInfo />
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {" "}
          About me
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {" "}
          Tech Stack
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {" "}
          Experience
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {" "}
          Projects
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          {" "}
          Education
        </Typography>
      </Box>
      <Box flex={1} sx={{ alignSelf: "start" }}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}> </Typography>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default App;
