import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

const MyReserved = () => {
  return (
    <Box sx={{ color: "white", padding: "1rem", paddingTop: "120px" }}>
      <Typography fontSize={48} textAlign="center" padding={2} fontWeight={300}>
        My Reservations
      </Typography>
      <Box sx={{ background: "rgb(26, 26, 26)" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">Cinema</TableCell>
                <TableCell className="table-cell">Date</TableCell>
                <TableCell className="table-cell">Start time</TableCell>
                <TableCell className="table-cell">Ticket price</TableCell>
                <TableCell className="table-cell">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="table-cell">Hellow</TableCell>
                <TableCell className="table-cell">2022-03-24</TableCell>
                <TableCell className="table-cell">10：34</TableCell>
                <TableCell className="table-cell">￥32</TableCell>
                <TableCell className="table-cell">￥120</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell">Hellow</TableCell>
                <TableCell className="table-cell">2022-03-24</TableCell>
                <TableCell className="table-cell">10：34</TableCell>
                <TableCell className="table-cell">￥32</TableCell>
                <TableCell className="table-cell">￥120</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell">Hellow</TableCell>
                <TableCell className="table-cell">2022-03-24</TableCell>
                <TableCell className="table-cell">10：34</TableCell>
                <TableCell className="table-cell">￥32</TableCell>
                <TableCell className="table-cell">￥120</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell">Hellow</TableCell>
                <TableCell className="table-cell">2022-03-24</TableCell>
                <TableCell className="table-cell">10：34</TableCell>
                <TableCell className="table-cell">￥32</TableCell>
                <TableCell className="table-cell">￥120</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={2}
          rowsPerPage={2}
          page={2}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          sx={{
            color: "white",
          }}
        ></TablePagination>
      </Box>
    </Box>
  );
};

export default MyReserved;
