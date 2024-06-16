import Construction from "../components/Construction/Construction";
import { PageParams } from "../constants/types";
import { NextPage } from "next";

const ProjectsPage: NextPage<PageParams> = ({ params }) => {
  return (
    <div>
      <Construction />
    </div>
  );
};

export default ProjectsPage;
