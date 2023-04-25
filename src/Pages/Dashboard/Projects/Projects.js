import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import Classes from "./Project.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5541D7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const FixedTables = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState([]);

  const fetchDataByPagination = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/project`);
      setData(response.data.message);
      setCounter(response.data.message);
      setIsLoading(true);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchDataByPagination();
  }, []);

  return (
    <>
      <>
        {/* <AddClassForm regetData={fetchDataByPagination} /> */}
        <TableContainer
          className={Classes.adminPage}
          component={Paper}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        >
          <Table>
            <TableHead></TableHead>
            <TableHead>
              <TableRow>
                <StyledTableCell>NAME</StyledTableCell>
                <StyledTableCell>DUE</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  {/* <StyledTableCell>{row.service_id.name}</StyledTableCell> */}
                  <StyledTableCell>{row.due.slice(0, 10)}</StyledTableCell>
                  {/* <ClassEditCard
                      adminValue={row.name}
                      rowId={row.id}
                      regetData={fetchDataByPagination}
                    />
                    <ClassDeleteCard
                      rowId={row.id}
                      regetData={fetchDataByPagination}
                    /> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </>
  );
};

export default FixedTables;
