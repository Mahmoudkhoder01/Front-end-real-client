import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Classes from "./table.module.css";
import ProjectEditCard from "../ProjectCards/ProjectEditCard";
import ProjectDeleteCard from "../ProjectCards/ProjectDeleteCard";

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

const FixedTables = (cells, rows) => {
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
                {cells.map((cell) => (
                  <StyledTableCell key={cell._id}>{cell}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell>{row.title}</StyledTableCell>
                  <StyledTableCell>{row.description}</StyledTableCell>
                  <StyledTableCell>{row.service_id.name}</StyledTableCell>
                  <StyledTableCell>
                    <img
                      src={`${process.env.REACT_APP_URL}${row.image}`}
                      alt="img"
                      className={Classes.image}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{row.due.slice(0, 10)}</StyledTableCell>
                  <StyledTableCell sx={{ display: "flex" }}>
                    <ProjectEditCard
                      adminValue={row.name}
                      rowId={row.id}
                      // regetData={fetchDataByPagination}
                    />
                    <ProjectDeleteCard
                      rowId={row.id}
                      // regetData={fetchDataByPagination}
                    />
                  </StyledTableCell>
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
