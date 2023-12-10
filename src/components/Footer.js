import TwitterIcon from "../images/TwitterIcon.png";
import FacebookIcon from "../images/FacebookIcon.svg";
import InstagramIcon from "../images/InstagramIcon.svg";
import GitHubIcon from "../images/GitHubIcon.svg";
export default function Footer() {
  return (
    <div className="footer">
      <h1>Footer section</h1>
      <img
        src={TwitterIcon}
        alt="Twitter Logo"
        width="25px"
        height="25px"
        className="nav--social-icon"
      />
      <img
        src={FacebookIcon}
        alt="Twitter Logo"
        width="25px"
        height="25px"
        className="nav--social-icon"
      />
      <img
        src={InstagramIcon}
        alt="Twitter Logo"
        width="25px"
        height="25px"
        className="nav--social-icon"
      />
      <img
        src={GitHubIcon}
        alt="Twitter Logo"
        width="25px"
        height="25px"
        className="nav--social-icon"
      />
    </div>
  );
}
