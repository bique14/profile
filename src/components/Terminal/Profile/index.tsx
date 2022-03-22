import "./index.css";

interface IProfile {
  name: string;
  role: string;
  description: string;
  stacks: string[];
  tools: string[];
  github: string;
}

interface Props {
  profile: IProfile;
}

const Profile = (props: Props) => {
  const { profile } = props;

  return (
    <>
      <h1 className="name-text">{profile.name}</h1>
      <h3 className="role-text">{profile.role}</h3>
      <div className="stack-container">
        {profile.stacks.map((stack, i) => (
          <span className="stack-text">{stack}</span>
        ))}
      </div>
      <hr />
      <div className="tools-container">
        {profile.tools.map((tool, i) => (
          <span className="tool-text">
            {tool}
            {i !== profile.tools.length - 1 && ","}
          </span>
        ))}
      </div>
      <a href="https://github.com/bique14" className="github">
        https://github.com/bique14
      </a>
    </>
  );
};

export default Profile;
