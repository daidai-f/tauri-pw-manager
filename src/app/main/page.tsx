"use client";

import { Stack, Fab, Typography, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function MainPage() {
  return (
    <>
      <Stack
        height="100vh"
        alignItems="center"
        bgcolor="#282a36"
        borderRadius="10px"
        border="2px solid #404353"
      >
        <Typography variant="h5" marginTop="2rem">
          Credentials
        </Typography>
      </Stack>
      <Tooltip title="Add credentials" placement="left">
        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: 20, right: 20 }}
          // onClick={() => goToPage("add")}
        >
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
}
