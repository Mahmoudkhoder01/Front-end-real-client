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
import DropDown from "../DropDown/DropDown";

// import date fields from mui
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export default function AddEventForm(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newData, setNewData] = useState({
    name: "",
    description: "",
    serviceName: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevState) => ({ ...prevState, [name]: value }));
  };

  const addsServiceId = (service_id) => {
    setSelectedServiceId(service_id);
  };

  const handleAddProject = async (event) => {
    event.preventDefault();

    let newEvent = new FormData();
    newEvent.append("name", newData.name);
    newEvent.append("description", newData.description);
    newEvent.append("service_id", selectedServiceId);
    newEvent.append("due", selectedDate);
    newEvent.append("image", selectedFile);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}api/events`,
        newEvent
      );
      console.log(response.data);
      setOpen(false);
      await props.regetDataAgain();
      toast.success("Event added succefully");
    } catch (error) {
      console.error(error);
      toast.error("Event added failed");
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
        Add Event
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Event
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter a name"
                  name="name"
                  label="Name"
                  onChange={handleFormChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter a decription"
                  label="Description"
                  name="description"
                  onChange={handleFormChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6} sm={12}>
                <DropDown getServiceName={addsServiceId} />
              </Grid>
              <Grid xs={12} sm={12} item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    label="Due date"
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid xs={12} sm={12} item>
                <label htmlFor="myfile">Select a file:</label>
                <input
                  type="file"
                  id="myfile"
                  name="image"
                  onChange={handleFileInputChange}
                  className={classes.filesInput}
                />
              </Grid>
              <Grid className={classes.add} item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.addButton}
                  onClick={handleAddProject}
                >
                  Add New Event
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
