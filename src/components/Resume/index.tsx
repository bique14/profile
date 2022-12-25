import type { AppType } from "../../types";
import type { ResumeType } from "./resume.type";

import ApplicationHeaderControl from "../ApplicationHeaderControl";
import useDrag from "../../hooks/useDrag";

import Icons from "../../icons";
import { useRef } from "react";

const RESUME: ResumeType = require("./resume.json");

const APP_SLUG: AppType = "resume";
const APP_NAME: string = "Peerasorn Hemsart - resume";

interface ResumeProps {
  onClose: (appType: AppType) => void;
}

type ZoomType = "zoom-in" | "zoom-out";

const Resume = (props: ResumeProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  const paperRef = useRef<any>();

  const onClick = (zoomType: ZoomType) => {
    const currentScale = +(paperRef.current.style.transform || 0).replace(
      /^\D+|\)/g,
      ""
    );

    switch (zoomType) {
      case "zoom-in":
        return (paperRef.current.style = `transform: scale(${
          currentScale + 0.1
        });`);
      case "zoom-out":
        return (paperRef.current.style = `transform: scale(${
          currentScale - 0.1
        });`);
      default:
        return;
    }
  };

  return (
    <div
      className="select-none w-1/2 h-4/5 bg-[rgb(234,234,234)] rounded-[4px] absolute z-10 top-[10%] left-[20%]"
      ref={setRef}
    >
      <div
        className="flex px-2 h-5"
        style={{
          borderRadius: "4px 4px 0 0",
        }}
        onMouseDown={initialiseDrag}
      >
        <ApplicationHeaderControl appSlug={APP_SLUG} onClose={onClose} />
        <div className="flex-1 text-center text-black self-center text-sm cursor-default">
          {APP_NAME}
        </div>
      </div>
      <div className="flex justify-between px-2 mb-2 h-6">
        <div className="flex gap-1">
          <div
            className="bg-white px-2 flex items-center h-full rounded text-sm text-gray-400 cursor-pointer"
            onClick={() => onClick("zoom-in")}
          >
            +
          </div>
          <div
            className="bg-white px-2 flex items-center h-full rounded text-sm text-gray-400 cursor-pointer"
            onClick={() => onClick("zoom-out")}
          >
            -
          </div>
          <div className="bg-white rounded self-center px-2 h-full cursor-pointer">
            <div className="w-4 my-1">
              <Icons.Download />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white rounded text-xs text-gray-400 w-40">
          Search
        </div>
      </div>
      <div className="bg-[rgb(221,221,221)] h-full py-2 px-4 overflow-scroll flex flex-col gap-2">
        <div
          id="paper-1"
          ref={paperRef}
          className="bg-white h-fit shadow-md flex flex-col px-4 py-10"
          style={{ transform: "scale(1)" }}
        >
          <div className="text-center border-b-2 pb-4">
            <h1 className="font-bold">
              {RESUME.name} {RESUME.nickname}
            </h1>
            <span>{RESUME.position}</span>
          </div>
          <div id="my-experienced" className="mt-4">
            <div className="border-b-2 pb-4">
              <Companies />
            </div>

            <div className="mt-4 border-b-2 pb-4">
              <Internship />
            </div>
          </div>
        </div>
        <div
          id="paper-2"
          className="bg-white h-fit shadow-md flex flex-col px-4 py-10"
        >
          <div className="mt-4">
            <div className="border-b-2 pb-4">
              <Skill />
            </div>

            <div className="mt-4 border-b-2 pb-4">
              <Educations />
            </div>
          </div>
        </div>

        <div
          id="paper-3"
          className="bg-white h-fit shadow-md flex flex-col px-4 py-10"
        >
          <div className="mt-4">
            <div className="pb-4">
              <Playgrounds />
            </div>

            <div className="mt-4 border-b-2 pb-4">
              <span className="text-sm">
                See more on github -{" "}
                <a
                  className="underline text-blue-700"
                  href="https://github.com/bique14"
                >
                  https://github.com/bique14
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  const { companies } = RESUME;

  return (
    <>
      <span className="font-bold">EMPLOYMENT HISTORY</span>
      <div className="flex flex-col gap-4 mt-2">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col text-sm">
            <span className="font-bold">
              {company.name}, {company.location} - {company.position}
            </span>
            <span className="text-xs text-gray-500">
              {company.duration.start} - {company.duration.end}
            </span>

            <div className="flex flex-col gap-2">
              {company.projects.map((project) => (
                <div
                  key={`${company.name}-${project.name}`}
                  className="flex flex-col"
                >
                  <span className="italic">{project.name}</span>
                  {project.link && (
                    <a
                      className="underline text-blue-700"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link}
                    </a>
                  )}
                  <span>{project.description}</span>
                  <span className="text-xs text-gray-400">
                    STACKS : {project.stacks}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Internship = () => {
  const { internship } = RESUME;

  return (
    <>
      <span className="font-bold">INTERNSHIP</span>
      <div className="flex flex-col text-sm mt-2">
        <span className="font-bold">
          {internship.company}, {internship.location} - {internship.position}
        </span>
        <span className="text-xs text-gray-500">
          {internship.duration.start} - {internship.duration.end}
        </span>
        <span className="italic">{internship.project.name}</span>
        <span>{internship.project.description}</span>
        <span className="text-xs text-gray-400">
          STACK : {internship.project.stacks}
        </span>
      </div>
    </>
  );
};

const Skill = () => {
  const { skill } = RESUME;

  return (
    <>
      <span className="font-bold">SKILLS</span>
      <div className="flex flex-col gap-2 text-sm mt-2">
        <div>
          <span className="font-bold">LANGUAGES</span>
          <div className="grid grid-cols-5">
            {skill.languages.map((language) => (
              <span key={language} className="text-xs text-gray-500">
                {language}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm font-bold">TOOLS</span>
          <div className="grid grid-cols-5">
            {skill.tools.map((language) => (
              <span key={language} className="text-xs text-gray-500">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Educations = () => {
  const { educations } = RESUME;

  return (
    <>
      <span className="font-bold">EDUCATION</span>
      <div className="flex flex-col gap-2 text-sm mt-2">
        {educations.map((education) => (
          <div key={education.institution} className="flex flex-col">
            <span>
              {education.degree}, {education.institution} - {education.major}
            </span>
            <span className="text-xs text-gray-500">
              {education.duration.start} - {education.duration.end}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const Playgrounds = () => {
  const { playgrounds } = RESUME;

  return (
    <>
      <span className="font-bold">MY PROJECTS</span>
      <div className="flex flex-col gap-2 text-sm mt-2">
        {playgrounds.map((playground) => (
          <div key={playground.name} className="flex flex-col">
            <span className="font-bold">{playground.name}</span>
            {playground.link && (
              <a
                className="underline text-blue-700"
                href={playground.link}
                target="_blank"
                rel="noreferrer"
              >
                {playground.link}
              </a>
            )}
            <span className="text-xs text-gray-500">{playground.date}</span>
            <span>{playground.description}</span>
            <span className="text-xs text-gray-400">
              STACKS : {playground.stacks}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resume;
