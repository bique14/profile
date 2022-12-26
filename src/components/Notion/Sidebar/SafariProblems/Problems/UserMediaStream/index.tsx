import Code from "../../../../CodeBlock";

const UserMediaStream = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">UserMediaStream on Safari</h1>
      <span>freezed on first frame, you can solve with</span>
      <Code>
        <span>video.play()</span>
      </Code>
    </div>
  );
};

export default UserMediaStream;
