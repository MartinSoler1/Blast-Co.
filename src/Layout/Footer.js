import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={classes.cont}>
      <div className={classes.footer}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={classes.socialmedia} icon={faFacebook} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={classes.socialmedia} icon={faInstagram} /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={classes.socialmedia} icon={faTwitter} /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={classes.socialmedia} icon={faYoutube} /></a>
      </div>
      <label htmlFor="suscription">Intrested in new products?</label>
      <div className="suscrip">
        <input
          type="text"
          name="suscription"
          id="suscription"
          placeholder="Enter yout email adress"
        />
        <button>S U B S C R I B E</button>
      </div>
    </Container>
  );
};

export default Footer;
