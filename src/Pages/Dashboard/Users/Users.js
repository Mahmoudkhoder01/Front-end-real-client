import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Classes from "../CssTable/Table.module.css";

// import reusabel fetch data
import useFetch from "../../../Components/useFetch/useFetch";

// import components
import Loading from "../../../Components/LoadingAnimation/Loading";
import AddAdminForm from "../../../Components/AdminCards/AdminAddCard";
import AdminEditCard from "../../../Components/AdminCards/AdminEditCard";
import AdminDeleteCard from "../../../Components/AdminCards/AdminDeleteCard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#DB1866",
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
  const { data, isLoading, reFetch } = useFetch("admin");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AddAdminForm regetDataAgain={reFetch} />
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
                  <StyledTableCell>USERNAME</StyledTableCell>
                  <StyledTableCell>EMAIL</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell>{row.username}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell
                      sx={{
                        display: "flex",
                      }}
                    >
                      <AdminEditCard
                        username={row.username}
                        email={row.email}
                        rowId={row._id}
                        regetData={reFetch}
                      />
                      <AdminDeleteCard rowId={row._id} regetData={reFetch} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default FixedTables;
