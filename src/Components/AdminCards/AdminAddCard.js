import React from "react";
import { useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "../CssTableCards/Card.module.css";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: "95%",
    maxWidth: "none",
  },
};

export default function AddAdminForm(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newData, setNewData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProject = async (event) => {
    event.preventDefault();

    let newAdmin = {
      username: newData.username,
      email: newData.email,
      password: newData.password,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}admin/register`,
        newAdmin
      );
      console.log(response.data);
      setOpen(false);
      await props.regetDataAgain();
      toast.success("Admin added succefully");
    } catch (error) {
      console.error(error);
      toast.error("Admin added failed");
    }
  };

  return (
    <div>
      <button
        className={classes.addFormBtn}
        style={{ transform: "translate(84.5rem, 1rem)" }}
        onClick={handleOpen}
      >
        <FiPlus />
        Add Admin
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Admin
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter a username"
                  name="username"
                  label="User Name"
                  onChange={handleFormChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter an email"
                  name="email"
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
                  label="Password"
                  onChange={handleFormChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid className={classes.add} item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.addButton}
                  onClick={handleAddProject}
                >
                  Add New Admin
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
