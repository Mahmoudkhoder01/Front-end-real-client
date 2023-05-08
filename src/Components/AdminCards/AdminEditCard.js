import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "react-toastify";
import classes from "../CssTableCards/Card.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdminEditCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [updatedData, setUpdatedData] = useState({
    username: props.username,
    email: props.email,
    password: props.password,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const formData = {
      username: updatedData.username,
      email: updatedData.email,
      password: updatedData.password,
    };

    axios
      .patch(`${process.env.REACT_APP_URL}admin/edit/${props.rowId}`, formData)
      .then(async (response) => {
        console.log(response);
        setUpdatedData({
          username: props.username,
          email: props.email,
        });
        setOpen(false);
        await props.regetData();
        toast.success("Admin edited successfully");
      })
      .catch((error) => {
        console.log("Error editing Admin", error);
        toast.error(error.response.data.err);
      });
  };

  return (
    <>
      <div>
        <IconButton onClick={handleOpen}>
          <EditIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Admin
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder="Enter a username"
                    name="username"
                    value={updatedData.username}
                    label="User Name"
                    onChange={handleFormChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder="Enter an email address"
                    name="email"
                    value={updatedData.email}
                    label="Email Address"
                    onChange={handleFormChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    type="password"
                    placeholder="Enter a password"
                    name="password"
                    value={updatedData.password}
                    label="Password"
                    onChange={handleFormChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                    className={classes.addButton}
                  >
                    Edit Admin
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}
