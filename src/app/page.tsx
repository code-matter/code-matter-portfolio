import { NextPage } from "next";
import { PageParams } from "./constants/types";
import Construction from "./components/Construction/Construction";

const Home: NextPage<PageParams> = ({ params }) => {
  return (
    <main className="main">
      <div>
        <Construction />
      </div>
    </main>
  );
};

export default Home;
