import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Classes from "./Team.module.css";

// import reusabel fetch data
import useFetch from "../../../Components/useFetch/useFetch";
import Loading from "../../../Components/LoadingAnimation/Loading";
import AddTeamForm from "../../../Components/TeamCards/TeamAddCard";
import TeamEditCard from "../../../Components/TeamCards/TeamEditCard";
import TeamDeleteCard from "../../../Components/TeamCards/TeamDeleteCard";

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
  const { data, isLoading, reFetch } = useFetch("team");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AddTeamForm regetDataAgain={reFetch} />
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
                  <StyledTableCell>DESCRIPTION</StyledTableCell>
                  <StyledTableCell>IMAGE</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.description}</StyledTableCell>
                    <StyledTableCell>
                      <img
                        src={`${process.env.REACT_APP_URL}${row.image}`}
                        alt="img"
                        className={Classes.image}
                      />
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        display: "flex",
                      }}
                    >
                      <TeamEditCard
                        name={row.name}
                        description={row.description}
                        image={row.image}
                        due={row.due}
                        rowId={row._id}
                        regetData={reFetch}
                      />
                      <TeamDeleteCard rowId={row._id} regetData={reFetch} />
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
