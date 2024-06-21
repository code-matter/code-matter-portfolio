import { Experience, EXPERIENCES } from "@/app/constants/experiences";
import React from "react";
import ExperienceItem from "./ExperienceItem";

type ExperiencesProps = {};

const Experiences = ({}: ExperiencesProps) => {
  return (
    <ul className="experiences-list">
      {EXPERIENCES.map((experience: Experience) => (
        <ExperienceItem experience={experience} key={experience.workplace} />
      ))}
    </ul>
  );
};

export default Experiences;
