import Experiences from "../components/About/Experiences";
import Construction from "../components/Construction/Construction";
import { PageParams } from "../constants/types";
import { NextPage } from "next";

const AboutPage: NextPage<PageParams> = ({ params }) => {
  return (
    <div>
      <Experiences />
    </div>
  );
};

export default AboutPage;
