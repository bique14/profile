import Lightning from "../../../../svg/Lightning";
import "./index.css";

interface BatterProps {
  charging: boolean;
  level: number;
}

const Battery = (props: BatterProps) => {
  const { charging, level } = props;

  return (
    <>
      <span>{(level * 100).toFixed(0)}%</span>
      <div
        className="battery-level relative bg-[rgba(71,71,71,1)] w-5 h-3 rounded-sm"
        style={{
          border: "1px solid rgb(150,150,150)",
        }}
      >
        {charging && (
          <div className="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 -translate-y-1/2">
            <Lightning />
          </div>
        )}
        <div
          className="h-full bg-white"
          style={{
            width: `${level * 100}%`,
            borderRadius: "2px",
            boxShadow: "0px 0px 0 1px rgba(71,71,71,1) inset",
          }}
        ></div>
      </div>
    </>
  );
};

export default Battery;
