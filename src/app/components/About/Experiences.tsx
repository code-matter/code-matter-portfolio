"use client";
import { Experience, EXPERIENCES } from "@/app/constants/experiences";
import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { Select } from "antd";

type ExperiencesProps = {};

const skillsList = [
  ...new Set(EXPERIENCES.map((e: Experience) => e.skills).flat()),
];

const skillsFilter: {
  [key: string]: string;
}[] = skillsList.map((skill: string) => ({ label: skill, value: skill }));

const Experiences = ({}: ExperiencesProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="experiences">
      <div className="experiences-filter">
        <Select
          style={{ width: "50%" }}
          mode="multiple"
          onChange={setSelectedFilters}
          options={skillsFilter}
          allowClear
        />
      </div>
      <ul className="experiences-list">
        {EXPERIENCES.filter((experience: Experience) => {
          if (selectedFilters.length === 0) return true;
          return experience.skills.find((skill) =>
            selectedFilters.includes(skill)
          );
        }).map((experience: Experience) => (
          <ExperienceItem experience={experience} key={experience.workplace} />
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
