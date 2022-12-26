import Problems from "./Problems";

const TITLE: string = "💣 Safari is Suck!";

const SafariProblems = () => {
  return (
    <div className="h-full flex flex-col w-9/12 mx-auto overflow-scroll">
      <h1 className="text-5xl font-bold mb-12">{TITLE}</h1>

      <div>
        <Problems.DateFormat />
        <hr className="w-full" />
        <Problems.UserMediaStream />
      </div>
    </div>
  );
};

export default SafariProblems;
