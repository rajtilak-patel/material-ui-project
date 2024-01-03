import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

import AddHomeIcon from "@mui/icons-material/AddHome";
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Sidebar = ( {mode , setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton>
          <ListItemIcon>
            <AddHomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      {/* </List> */}
      {/* <List component="nav" aria-labelledby="nested-list-subheader"> */}
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/>
        </ListItemButton>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
