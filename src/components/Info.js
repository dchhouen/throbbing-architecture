import profilePic from "../images/profilepic.jpeg";
export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="Profile Picture" className="nav--icon" />
      <h1 className="info--name">Danny Chhouen </h1>
      <h2 className="info--title">Full Stack Developer</h2>
      <a href="https://danny.dev" className="info--website">
        danny.dev
      </a>
      <a href="mailto:dchhouen@duck.com">
        <button className="info--email-button">Email</button>
      </a>
    </div>
  );
}
