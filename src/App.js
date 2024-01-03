import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddPlus from "./components/AddPlus";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack spacing={2} direction="row" justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <AddPlus />
    </Box>
  );
}

export default App;
