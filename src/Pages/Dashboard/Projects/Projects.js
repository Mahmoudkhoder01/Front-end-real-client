import * as React from "react";
import classes from "./Project.module.css";
import ProjectEditCard from "../../../Components/ProjectCards/ProjectEditCard";
import ProjectDeleteCard from "../../../Components/ProjectCards/ProjectDeleteCard";
import useFetch from "../../../Components/useFetch/useFetch";
import FixedTables from "../../../Components/DashboardTable/Table";

const Project = () => {
  const { data, isLoading, error, reFetcth } = useFetch("project");
  return (
    <>
      <FixedTables
        rows={data}
        cells={["TITLE", "DESCRIPTION", "SERVICE NAME", "IMAGE", "DUE", ""]}
      />
    </>
  );
};

export default Project;
