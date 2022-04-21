import type { AppType } from "../../App";

interface ApplicationHeaderControlProps {
  appSlug: AppType;
  onClose: (appType: AppType) => void;
}

const ApplicationHeaderControl = (props: ApplicationHeaderControlProps) => {
  const { appSlug, onClose } = props;

  return (
    // <div
    //   className="flex px-2 h-5"
    //   style={{
    //     background: "rgb(40, 44, 52)",
    //     borderRadius: "4px 4px 0 0",
    //   }}
    //   onMouseDown={onDrag}
    // >
    //   <div className="flex items-center gap-2">
    //     <div
    //       className="w-3 h-3 rounded-full cursor-pointer"
    //       style={{ background: "rgb(255, 98, 90)" }}
    //       onClick={() => onClose(appSlug)}
    //     ></div>
    //     <div
    //       className="w-3 h-3 rounded-full cursor-pointer"
    //       style={{ background: "rgb(255, 193, 46)" }}
    //     ></div>
    //     <div
    //       className="w-3 h-3 rounded-full cursor-pointer"
    //       style={{ background: "rgb(41, 206, 66)" }}
    //     ></div>
    //   </div>
    //   <div className="flex-1 text-center">{appName}</div>
    // </div>
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full cursor-pointer"
        style={{ background: "rgb(255, 98, 90)" }}
        onClick={() => onClose(appSlug)}
      ></div>
      <div
        className="w-3 h-3 rounded-full cursor-pointer"
        style={{ background: "rgb(255, 193, 46)" }}
      ></div>
      <div
        className="w-3 h-3 rounded-full cursor-pointer"
        style={{ background: "rgb(41, 206, 66)" }}
      ></div>
    </div>
  );
};

export default ApplicationHeaderControl;
