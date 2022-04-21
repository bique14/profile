import type { AppType } from "../../App";

import ApplicationHeaderControl from "../ApplicationHeaderControl";
import useDrag from "../../hooks/useDrag";

const APP_SLUG = "resume";

interface ResumeProps {
  onClose: (appType: AppType) => void;
}

const Resume = (props: ResumeProps) => {
  const { onClose } = props;
  const { setRef, initialiseDrag } = useDrag();

  return (
    <div
      className="w-1/2 h-4/5 bg-[rgb(234,234,234)] rounded-[4px] absolute z-10"
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
          Peerasorn Hemsart - resume
        </div>
      </div>
      <div>Tools bar</div>
      <div className="bg-[rgb(221,221,221)] h-full">
        <div
          id="paper"
          className="bg-white mx-4 h-full shadow-md flex flex-col px-4 py-10"
        >
          <div className="text-center border-b-2 pb-4">
            <h1 className="font-bold">Peerasorn Hemsart (Big)</h1>
            <span>Frontend Developer</span>
          </div>
          <div id="employment-history" className="mt-4">
            <span className="font-bold">EMPLOYMENT HISTORY</span>

            <div className="flex flex-col text-sm">
              <span className="font-bold">
                SCG, Bangkok - Frontend Developer
              </span>
              <span className="text-xs text-gray-500">Sep 2021 - Present</span>
              <span className="italic">E-commerce website</span>
              <a
                className="underline text-blue-700"
                href="https://www.doozyonline.com/"
              >
                https://www.doozyonline.com/
              </a>
              <span>
                An e-commerce website for selling products about packaging of
                SCG.
              </span>
              <span className="text-xs">
                STACK : ReactJS, Material UI, Styled Component, Magento,
                GraphQL, Git Hook
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
