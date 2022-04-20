import { LocalizationProvider } from "@mui/lab";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Filter = () => {
  return (
    <Box sx={{padding:{md:'0 12rem'}}}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ color: "white" }}>Select Cinema</InputLabel>
            <Select>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ color: "white" }}>Select Date</InputLabel>
            <Select>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ color: "white" }}>Select Time</InputLabel>
            <Select>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
              <MenuItem>item1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
