import Construction from "../components/Construction/Construction";
import { PageParams } from "../constants/types";
import { NextPage } from "next";

const ContactPage: NextPage<PageParams> = ({ params }) => {
  return (
    <div>
      <Construction />
    </div>
  );
};

export default ContactPage;
