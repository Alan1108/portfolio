import {
  ContentCopy,
  Description,
  GitHub,
  LinkedIn,
  LocationOn,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { toast } from "react-toastify";

export const ContactInfo = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexDirection: "row",
      }}
    >
      <Avatar
        alt="Alan Bermudez"
        src="./src/assets/profile-photo.jpg"
        sx={{ width: 256, height: 256 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
          Alan Bermudez
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          Fullstack Developer
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            fontSize: 16,
          }}
        >
          <LocationOn />
          <Typography>Quito, Ecuador</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              borderColor: "white",
              borderStyle: "none",
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <Typography>alan.ibm1108@gmail.com</Typography>
            <IconButton
              size="small"
              sx={{ padding: 0 }}
              onClick={() => {
                navigator.clipboard.writeText("alan.ibm1108@gmail.com");
                toast.success("Copied to clipboard", {
                  position: "bottom-center",
                  autoClose: 1000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <ContentCopy />
            </IconButton>
          </Box>
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1L3P8WOm2jXdnFd3M-WY8bcMi1NRo4_77/view?usp=sharing"
              )
            }
          >
            <Description />
          </IconButton>
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            onClick={() => openInNewTab("https://www.linkedin.com/in/alanibm/")}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            onClick={() => openInNewTab("https://github.com/Alan1108")}
          >
            <GitHub />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
