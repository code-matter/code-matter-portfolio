import { Experience } from "@/app/constants/experiences";
import React from "react";

type ExperienceItemProps = {
  experience: Experience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="experience">
      <div className="experience-dates">
        <p>{experience.dates.join(" - ")}</p>
      </div>
      <div className="experience-info">
        <h1 className="experience-info_title">
          {experience.jobTitle} - {experience.workplace}
        </h1>
        <p className="experience-info_description">{experience.description}</p>
        <ul className="experience-info_skills">
          {experience.skills.map((skill: string) => (
            <li
              className="experience-info_skills-items"
              key={`${skill}-${experience.workplace}`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
