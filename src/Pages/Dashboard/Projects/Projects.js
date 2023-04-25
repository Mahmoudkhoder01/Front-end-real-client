import * as React from "react";
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
