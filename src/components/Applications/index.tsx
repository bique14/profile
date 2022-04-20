import type { AppType } from "../../App";

import Resume from "./Resume";
import Terminal from "./Terminal";

interface ApplicationsProps {
  onOpen: (appType: AppType) => void;
}

const ApplicationsType = Object.freeze({
  resume: "resume" as const,
  terminal: "terminal" as const,
});

const Applications = (props: ApplicationsProps) => {
  const { onOpen } = props;

  return (
    <div className="w-full h-full relative">
      <AppWrapper
        classes="right-4 top-4"
        onOpen={() => onOpen(ApplicationsType.resume)}
      >
        <Resume />
      </AppWrapper>
      <AppWrapper
        classes="right-20 top-4"
        onOpen={() => onOpen(ApplicationsType.terminal)}
      >
        <Terminal />
      </AppWrapper>
    </div>
  );
};

interface AppWrapperProps {
  classes?: string;
  onOpen: () => void;
  children: JSX.Element;
}

const AppWrapper = (props: AppWrapperProps) => {
  const { classes, onOpen, children } = props;

  return (
    <div
      // className={`w-20 h-24 absolute flex flex-col justify-center items-center cursor-pointer bg-red-200 ${classes}`}
      className={`absolute flex flex-col justify-center items-center cursor-pointer ${classes}`}
      onDoubleClick={onOpen}
    >
      {children}
    </div>
  );
};

export default Applications;
