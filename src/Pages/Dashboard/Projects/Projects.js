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
import ProjectEditCard from "../../../Components/ProjectCards/ProjectEditCard";
import ProjectDeleteCard from "../../../Components/ProjectCards/ProjectDeleteCard";

// import reusabel fetch data
import useFetch from "../../../Components/useFetch/useFetch";

// import components
import AddProjectForm from "../../../Components/ProjectCards/ProjectAddCard";
import Loading from "../../../Components/LoadingAnimation/Loading";

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
  const { data, isLoading, reFetch } = useFetch("project");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AddProjectForm regetDataAgain={reFetch} />
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
                  <StyledTableCell>TITLE</StyledTableCell>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>
                  <StyledTableCell>SREVICE NAME</StyledTableCell>
                  <StyledTableCell>IMAGE</StyledTableCell>
                  <StyledTableCell>DUE</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
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
                    <StyledTableCell
                      sx={{
                        display: "flex",
                      }}
                    >
                      <ProjectEditCard
                        title={row.title}
                        description={row.description}
                        serviceName={row.service_id.name}
                        image={row.image}
                        due={row.due}
                        rowId={row._id}
                        regetData={reFetch}
                      />
                      <ProjectDeleteCard rowId={row._id} regetData={reFetch} />
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
