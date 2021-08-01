import React from "react";
import style from "./footer.module.scss";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container style={{ width: "900px" }}>
      <div className={style.footer}>
        <h2>Subscribe to the Site and Get Acsess to more Amazing Shit</h2>
        <p>
          Hi there. This is the part of the website where I put a big toothy
          grin on my face and scream “BUT WAIT! THERE’S MORE!” at you in hopes
          to hold your attention for more than 30 milliseconds. <br></br>
          <br></br>
          Becausewait,there actually is more. If you’d like to check out some
          online courses I’ve put together, if you’d like to get special
          subscribers-only articles and responses from me, and if you’re
          interested in hearing me answer reader questions like I’m Anne fucking
          Landers and talk a bit more about my own experiences, my business
          ventures, and what I eat for breakfast on Sundays, well, then there
          actually is more.<br></br>
          <br></br>A lotmore. Become a subscriber to the site and get all that
          extra cool stuff. Just click the pretty, pretty button below to get
          started.
        </p>
        <button>CLICK ME</button>
      </div>
    </Container>
  );
};

export default Footer;
