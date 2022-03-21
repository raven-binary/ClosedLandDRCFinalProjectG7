/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import logo from "../../images/Artboard.svg";
import contactlogo from "../../images/contactus.png";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Tooltip,
  Alert,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import { FaRocketchat } from "react-icons/fa";
import { Link } from "react-router-dom";
import { send } from "@emailjs/browser";

// const initialFormData = Object.freeze({
//   message: "",
// });

const Footer = (props) => {
  const [sender_email, set_sender_email] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_q7gksxc",
      "template_edogtjl",
      { sender_email },
      "D-ltMhhZjgNMmY9Zs"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed to send message", err);
      });
    setAlert(true);
    // set_sender_email("");
  };

  const closeAlert = () => {
    setAlert(false);
    let frm = document.getElementsByName("sender_email");
    frm.value = "";
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Go to your 'Manage Your Account Settings' in Deriv website or click the
      link below to create your api token!
    </Tooltip>
  );

  return (
    <div className="main-footer">
      <Row className="email-inputgroup">
        <div className="emailSocials">
          <div className="emailFooter">
            <h1 id="footerH1Email">Get the latest updates!</h1>
            <h3 id="footerH3Email">
              Join our mailing list to get the latest scoop about NFT drops,
              newest features and more!
            </h3>
            <InputGroup>
              <Form className="form-control" id="formFooter">
                <Form.Control
                  // onSubmit={sendMail}
                  className="form-email"
                  type="email"
                  onChange={handleEmail}
                  name="sender_email"
                  value={sender_email}
                  placeholder="Email" // aria-label="Email"
                  aria-describedby="basic-addon2" //
                  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]
                {(2, 5)})$"
                  required // <h4> Please enter valid email </h4>
                ></Form.Control>
              </Form>

              <Button
                onClick={sendMail}
                // disabled={!sendFeedback}
                type="button"
                id="button-addon2"
              >
                Sign Up
              </Button>
            </InputGroup>
          </div>
          <div className="right-container">
            <h3 className="footer-socmed">Our Social Media</h3>
            <div className="socmed-icon">
              <a
                href="https://twitter.com/ClosedLand_22"
                className="footerIcons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GrTwitter
                  style={{ width: "2rem", height: "2rem" }}
                ></GrTwitter>
              </a>
              {/* src={twitter}
              // alt="twitter" target="_blank" rel="noopener noreferrer" //
              aria-label="Twitter" */}
              {/* <img className="discord" src={discord} alt="discord" /> */}
              <a
                href="https://discord.com/channels/@me"
                className="footerIcons"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiDiscord
                  style={{ width: "2rem", height: "2rem" }}
                ></SiDiscord>
              </a>
              {/* <img className="instagram" src={instagram} alt="instagram" /> */}
              <a
                href="https://www.instagram.com/closedland_22/"
                className="footerIcons"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GrInstagram
                  style={{ width: "2rem", height: "2rem" }}
                ></GrInstagram>
              </a>
              {/* <img className="youtube" src={youtube} alt="youtube" /> */}
              <a
                // href="https://www.youtube.com//"
                className="footerIcons"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GrYoutube
                  style={{ width: "2rem", height: "2rem" }}
                ></GrYoutube>
              </a>
              {/* <img className="email" src={email} alt="email" /> */}
              <a
                href="https://rocketchat.besquare.com.my/group/DRC_GROUP_TEAM_7"
                className="footerIcons"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaRocketchat
                  style={{ width: "2rem", height: "2rem" }}
                ></FaRocketchat>
              </a>
            </div>
          </div>
        </div>
        <div className="alltorow-container">
          <div className="left-container">
            <div className="iconandname">
              <img id="ilogo" src={logo} alt="logo" />
              <h2 className="footer-text">ClosedLand</h2>
            </div>
            <div className="fd">
              <h5 id="footer-describe">
                NFT platform provider which gives aesthetes and digital art
                creators a one-stop centre to do what they want.
              </h5>
            </div>
          </div>
        </div>
      </Row>
      <div className="alertSignIn">
        <Alert show={alert} variant="success" onClose={closeAlert} dismissible>
          <Alert.Heading>Thank you for connecting!</Alert.Heading>
        </Alert>
      </div>
      <div className="footer-trademark">
        <p className="footer-copyright">
          {" "}
          &copy;{new Date().getFullYear()} ClosedLand
        </p>
      </div>
    </div>
  );
};

export default Footer;
