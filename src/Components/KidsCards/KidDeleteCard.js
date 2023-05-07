import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";

// import css file
import classes from "../CssTableCards/DeleteCard.module.css";

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

export default function KidDeleteCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_URL}kid/${props.rowId}`)
      .then(async (response) => {
        setOpen(false);
        await props.regetData();
        toast.success("Kid deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting kid", error);
        toast.error(error);
      });
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Kid
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.deleteButtons}
                  onClick={handleDelete}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.deleteButtons}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  No
                </Button>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
