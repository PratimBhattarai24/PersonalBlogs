import React from "react";
import Article from "../../components/Articles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./home.module.scss";

import codavatar from "../../../public/codavatar.png";
import aana from "../../../public/99aana.png";
import esewa from "../../../public/esewa_logo.png";

import Image from "next/image";
// import Container from "reactstrap";

const Heading = () => {
  return (
    <div>
      <Navbar />
      <div className={style.heroText}>
        <div className={style.heroImg}>
          <div className={style.hero}>
            <div className={style.heroBlog}>
              <h1>New Vaccine For COVID-19</h1>
              <p>
                As a member you can ask me any question and upvote other
                members' questions. A couple times a year I answer the best and
                most-upvoted questions in my videos, exclusively available to
                site members.Subscribing costs less than a cup of coffee in some
                places. And it’s what allows me to feed myself in between
                writing amazing shit for you. So please, feed me.
              </p>
            </div>
            <div className={style.signUp}>
              <h3>Sign up Receive My Free Books</h3>
              <input placeholder="Your email address"></input>
              <button>Subscribe</button>
            </div>
            <div className={style.company}>
              <div className={style.vendor}>
                <Image src={codavatar} width={200} height={40} />
              </div>
              <div className={style.vendor}>
                <Image src={aana} width={200} height={38} />
              </div>
              <div className={style.vendor}>
                <Image src={esewa} width={124} height={33} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Article />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Heading;
