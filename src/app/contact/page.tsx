import Construction from "../components/Construction/Construction";
import { PageParams } from "../constants/types";
import { NextPage } from "next";

const ContactPage: NextPage<PageParams> = ({ params }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Construction />
    </div>
  );
};

export default ContactPage;
