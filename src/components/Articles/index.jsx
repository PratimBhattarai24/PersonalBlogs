import React from "react";
import Image from "next/image";
import style from "./article.module.scss";
import iphoneImg from "../../../public/poster.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";

const Article = () => {
  return (
    <div>
      <Container style={{ width: "1000px" }}>
        <div className={style.container}>
          <div className={style.recent}>
            <h2>RECENT ARTICLES</h2>
          </div>
          <div className={style.header}>
            <div className={style.articles}>
              <div className={style.articleImage}>
                <Image src={iphoneImg} width={146} height={146} />
              </div>
              <div className={style.timeDate}>
                <p>Date:</p>
                <h6>19 July, 2021</h6>

                <p>Category:</p>
                <h6>Social</h6>
                <p>Reading Times:</p>
                <h6>30 minutes read</h6>
              </div>
              <div className={style.article}>
                <h3>Social Media is not the problem..we are</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque voluptatum maxime nam dolorum itaque possimus earum
                  rerum eligendi quasi nostrum.
                </p>
              </div>
            </div>
            <hr />
            <div className={style.articles}>
              <div className={style.articleImage}>
                <Image src={iphoneImg} width={146} height={146} />
              </div>
              <div className={style.timeDate}>
                <p>Date:</p>
                <h6>19 July, 2021</h6>

                <p>Category:</p>
                <h6>Social</h6>
                <p>Reading Times:</p>
                <h6>30 minutes read</h6>
              </div>
              <div className={style.article}>
                <h3>Social Media is not the problem..we are</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque voluptatum maxime nam dolorum itaque possimus earum
                  rerum eligendi quasi nostrum.
                </p>
              </div>
            </div>
            <hr />
            <div className={style.articles}>
              <div className={style.articleImage}>
                <Image src={iphoneImg} width={146} height={146} />
              </div>
              <div className={style.timeDate}>
                <p>Date:</p>
                <h6>19 July, 2021</h6>

                <p>Category:</p>
                <h6>Social</h6>
                <p>Reading Times:</p>
                <h6>30 minutes read</h6>
              </div>
              <div className={style.article}>
                <h3>Social Media is not the problem..we are</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque voluptatum maxime nam dolorum itaque possimus earum
                  rerum eligendi quasi nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={style.button}>
        <button> See All Articles</button>
      </div>
    </div>
  );
};

export default Article;
