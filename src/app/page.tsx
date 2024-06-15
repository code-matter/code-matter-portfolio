import { NextPage } from "next";
import { PageParams } from "./constants/types";

const Home: NextPage<PageParams> = ({ params }) => {
  return (
    <main className="main">
      <h1>Code Matter</h1>
    </main>
  );
};

export default Home;
