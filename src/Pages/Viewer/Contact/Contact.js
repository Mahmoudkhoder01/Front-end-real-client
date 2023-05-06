import { Button, TextField } from "@mui/material";
import classes from "./Contact.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { BsPinMap } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();

    const sendEmail = {
      fullName: contact.fullName,
      email: contact.email,
      message: contact.message,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}contact`,
        sendEmail
      );
      setContact({
        fullName: "",
        email: "",
        message: "",
      });
      console.log(response.data);
      toast.success("message sended succefully");
    } catch (error) {
      console.error(error);
      toast.error("Message sending failed");
    }
  };

  return (
    <>
      <h1 className={classes.contactTitle}>Contact Us!</h1>
      <Grid container  sx={{ padding: "2rem 4rem", height:"65vh" }}>
        <Grid md={6} lg={6} xl={6}>
          <div>
            <p className={classes.info}>
              <BsPinMap style={{ marginRight: "1rem" }} color="#FDB714" />
              Testing
            </p>
            <p className={classes.info}>
              <CgMail style={{ marginRight: "1rem" }} color="#FDB714" />
              info@gmail.com
            </p>
            <p>
              <iframe
                title="company site"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.132591827229!2d35.831854370409744!3d34.42591311829413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6bba8d69d7b%3A0xf0cc7a9a7e2b064!2sAbou%20Samra%2C%20Tripoli!5e0!3m2!1sen!2slb!4v1683379324328!5m2!1sen!2slb"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </Grid>
        <Grid md={6} lg={6} xl={6}>
          <form className={classes.formGrid}>
            <TextField
              className={classes.formFields}
              placeholder="Enter your name"
              label="Name"
              name="fullName"
              value={contact.fullName}
              onChange={handleFormChange}
              required
            />
            <TextField
              className={classes.formFields}
              placeholder="Enter your email"
              label="Email"
              name="email"
              value={contact.email}
              onChange={handleFormChange}
              required
            />
            <TextField
              className={classes.formFields}
              placeholder="Enter your message"
              label="Message"
              name="message"
              value={contact.message}
              onChange={handleFormChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submitContact}
              onClick={handleSendEmail}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
