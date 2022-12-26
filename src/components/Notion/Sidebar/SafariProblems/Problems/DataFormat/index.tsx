import Code from "../../../../CodeBlock";
import Quote from "../../../../Quote";

const DateFormat = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Safari with date format</h1>
      <span>Safari can not using date format like this</span>
      <Code>
        <span>new Date(Date.parse("2022-11-28 18:00:000"))</span>
      </Code>
      <span>
        It will raise an error <Quote>Invalid Date</Quote>
        <br />
        <br />
        You should change <Quote>-</Quote> to <Quote>/</Quote> for fix an error.
      </span>
      <Code>
        <span>new Date(Date.parse("2022/11/28 18:00:000"))</span>
      </Code>
      <span>It work fine!</span>
    </div>
  );
};

export default DateFormat;
