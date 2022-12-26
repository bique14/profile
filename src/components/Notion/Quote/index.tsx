type QuoteProps = {
  children: string | JSX.Element | JSX.Element[];
};
const Quote = (props: QuoteProps) => {
  const { children } = props;

  return (
    <div className="bg-[rgb(40,40,40)] text-[rgb(244,85,85)] rounded inline-block px-2">
      {children}
    </div>
  );
};

export default Quote;
