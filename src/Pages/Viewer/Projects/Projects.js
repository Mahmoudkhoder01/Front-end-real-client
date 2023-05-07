import classes from "./Project.module.css";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import imagetest1 from "../../../Assets/Images/Drafts/WhatsApp Image 2023-02-12 at 1.17.01 PM.jpeg"

import pic1 from "../../../Assets/Images/portfolio1.jpg";
import pic2 from "../../../Assets/Images/portfolio2.jpg";
import pic3 from "../../../Assets/Images/portfolio3.jpg";
// import reusabel fetch data
// import useFetch from "../../../Components/useFetch/useFetch";
// import Loading from "../../../Components/LoadingAnimation/Loading";


export default function Projects() {


  return (
    <>
      <div className={classes.cards}>
        <ProjectCard
          title="Project Test"
          image={pic1}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <ProjectCard
          title="Project Test"
          image={pic2}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <ProjectCard
          title="Project Test"
          image={pic3}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <ProjectCard
          title="Project Test"
          image={pic1}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <ProjectCard
          title="Project Test"
          image={pic2}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
        <ProjectCard
          title="Project Test"
          image={pic3}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </div>
    </>
  );
}
