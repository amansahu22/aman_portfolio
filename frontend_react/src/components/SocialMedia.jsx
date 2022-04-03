import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.google.com" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.google.com" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.google.com" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.google.com" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
