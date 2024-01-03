import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPlus from "./components/AddPlus";
import { useState } from "react";

function App() {

  const [mode , setMode] = useState("light")

  const darkTheme = createTheme({ palette: { mode: mode } })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar mode={mode}/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode} />
      <Feed/>
      <Rightbar/>
      </Stack>
      <AddPlus  />
    </Box>
    </ThemeProvider>
  );
}

export default App;
