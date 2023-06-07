import React, { useEffect } from "react";
import Intro from "./Intro";
import ButtonDownload from "./ButtonDownload";
import EducationList from "../home/education/EducationList";
import OrganizationList from "../home/organization/OrganizationList";
import Skills from "../home/skills/Skills";
import Project from "../home/project/Project";
import ExperienceList from "../home/experience/ExperienceList";
import { getDataEd } from "../dataEd";
import { getDataOrg } from "../dataOrg";
import { getDataExp } from "../dataExp";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const educations = getDataEd();
  const organizations = getDataOrg();
  const experiences = getDataExp();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="home">
      <Intro />
      <ButtonDownload />
      <div className="edu-org" data-aos="zoom-in">
        <EducationList educations={educations} />
        <div className="vertikal"></div>
        <OrganizationList organizations={organizations} />
      </div>
      <Skills />
      <Project />
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default Home;
