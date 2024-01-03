import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  margin: "0 10px",
  padding: "0px 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}));

const UserBox = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }


}));

const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          RAJ
        </Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge color="error" badgeContent={4}>
            <EmailIcon />
          </Badge>
          <Badge color="error" badgeContent={4}>
            <NotificationsIcon />
          </Badge>
        <Avatar onClick={(e)=> setOpen(true)} sx={{height:30 , width:30}} alt="Remy Sharp" src="https://unsplash.com/photos/a-woman-sitting-on-a-stool-posing-for-a-picture-4OpJoosWwMs"/>
        </Icons>
        <UserBox onClick={(e)=> setOpen(true)}>

        <Avatar sx={{height:30 , width:30}} alt="Remy Sharp" src="https://unsplash.com/photos/a-woman-sitting-on-a-stool-posing-for-a-picture-4OpJoosWwMs"/>

         <Typography variant="span" >Raj</Typography>
        </UserBox>
      </StyleToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
