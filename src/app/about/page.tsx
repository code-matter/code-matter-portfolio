import Link from "next/link";
import Experiences from "../components/About/Experiences";
import Construction from "../components/Construction/Construction";
import { PageParams } from "../constants/types";
import { NextPage } from "next";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaSquareInstagram,
} from "react-icons/fa6";

const AboutPage: NextPage<PageParams> = ({ params }) => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left_whoami">
          <h1>Who Am I ?</h1>
          <div className="about-left_whoami_socials">
            <Link
              href="https://github.com/code-matter"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alex-caissy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCoSyksSayKzRKuE4fEzqQgA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube size={32} />
            </Link>
            <Link
              href="https://www.instagram.com/droop.fpv/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaSquareInstagram size={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-right">
        <Experiences />
      </div>
    </div>
  );
};

export default AboutPage;
