import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useFetch from "../useFetch/useFetch";

export default function BasicSelect({ getServiceName }) {
  const [service, setService] = React.useState([]);

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const { data } = useFetch("service");

  const handleClick = (service_id) => {
    getServiceName(service_id);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Service Name"
          onChange={handleChange}
        >
          {data.map((e) => (
            <MenuItem
              key={e._id}
              value={e.name}
              onClick={() => handleClick(e._id)}
            >
              {e.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
