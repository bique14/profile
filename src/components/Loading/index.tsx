import Icons from "../../icons";

import "./index.css";

interface LoadingProps {
  percent: number;
}

const Loading = (props: LoadingProps) => {
  const { percent } = props;

  return (
    <div className="fade-out w-full h-full bg-black text-white">
      <div className="w-1/2 h-full mx-auto flex flex-col justify-center items-center">
        <div className="w-28">
          <Icons.Apple />
        </div>
        <div className="w-64 h-4 bg-black border border-white p-[2px] rounded mt-10">
          <div
            className="bg-white h-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
