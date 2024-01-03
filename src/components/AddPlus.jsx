import { Add, CameraAlt, Facebook, Person, PostAdd } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPlus = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,

          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add onClick={(e) => setOpen(true)} />
        </Fab>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor="white" width={400} height={280} p={3} borderRadius={5}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"gray"}
            textAlign="center"
          >
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            />
            <Typography>Raj</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            multiline
            id="standard-helperText"
            placeholder="What's your mind"
            variant="standard"
            rows={3}
          />

          <Stack direction={"row"} gap={1} mb={1} mt={1}>
            <EmojiEmotionsIcon color="primary" sx={{ cursor: "pointer" }} />
            <Facebook color="secondary" sx={{ cursor: "pointer" }} />
            <Person color="error" sx={{ cursor: "pointer" }} />
            <CameraAlt color="black" sx={{ cursor: "pointer" }} />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"15px"}}><PostAdd/></Button>
            </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default AddPlus;
