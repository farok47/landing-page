import React from "react";
import "./style1.css";
import "./style2.css";
import "./style3.css";
import "./style4.css";
import "./style5.css";
import "./style6.css";
import image1 from "./images/image 9.png";
import image2 from "./images/Frame-7.png";
import image3 from "./images/solar-panels-meadow 2 (2).png";
import image4 from "./images/solar-panels-meadow 2 (1).png";
import image5 from "./images/solar-panels-meadow 2.png";
import arrow from "./images/right-arrow.png";
import energy from "./images/thunder.png";
import photo from "./images/photo.png";

function Solarkits() {
  return (
    <div>
      <div className="one">
        <div className="navbar">
          <div className="userphoto">
            <img style={{ color: "rgb(13, 154, 138)" }} src={image1} alt="" />
          </div>
          <div className="links">
            <a href="">Home</a>
            <a href="">Trade</a>
            <a href="">Shop</a>
            <a href="">Contact Us</a>
          </div>
          <div className="numberphone">
            <p>call us</p>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="content">
          <div className="one-to-four">
            <span>01</span>

            <span className="bar">__________</span>
            <p className="bar">______________________</p>
            <span>04</span>
          </div>
          <div className="paragraph">
            <h1>Solar Panel Installers In Plymounth</h1>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              an apprenticeship. If you already have relevant qualifications you
              could apply directly to an employer for a job.{" "}
            </p>
          </div>
          <div className="buttons">
            <button className="l">Call Us Today</button>
            <button className="r">Request a Call back</button>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="left">
          <h1>The Friendiest Installers in the south-west</h1>
          <p>
            There are several routes to becoming a solar panel installer. You
            can gain the qualifications you need by doing a college course or an
            apprenticeship. If you already have relevant qualifications you
            could apply directly to an employer for a job. You should explore
            these routes of becoming a solar panel installer to find out which
            is the right one for you. Although some options have certain
            qualification requirements, many employers are interested in people
            who are enthusiastic.{" "}
          </p>
          <div className="numbers">
            <p className="number">01/</p>
            <h3>collaborate wuth +100 leading</h3>
          </div>
          <div className="numbers">
            <p className="number">02/</p>
            <h3>+100 leading universities and companies</h3>
          </div>
          <div className="numbers">
            <p className="number">03/</p>
            <h3> leading universities and companies</h3>
          </div>
          <div className="numbers">
            <p className="number">04/</p>
            <h3>universities and companies</h3>
          </div>
        </div>
        <div className="right">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="three">
        <div className="content3">
          <h1>Power that doesn't cost the Earth</h1>
          <p>
            There are several routes to becoming a solar panel installer. You
            can gain the qualifications{" "}
          </p>
          <button>call us today</button>
        </div>
      </div>
      <div className="four">
        <h1>Solar Kits</h1>
        <p>
          There are several routes to becoming a solar panel installer. You can
          gain the qualifications you need by doing a college course or an
          apprenticeship. If you already have relevant qualifications you could
          apply directly to an employer for a job.{" "}
        </p>
        <div className="photos">
          {" "}
          <div className="photo1">
            <img src={image3} alt="" />
            <h3>Off Grid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              an
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
          <div className="photo2">
            <img src={image4} alt="" />
            <h3>On Grid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              an
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
          <div className="photo3">
            <img src={image5} alt="" />
            <h3> Hybrid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              an
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="five">
        <div className="content">
          <h1>Repair Over Replacemet</h1>
          <p>
            There are several routes to becoming a solar panel installer. You
            can gain the qualifications you need by doing a college course or an
            apprenticeship. If you already have relevant qualifications you
            could apply directly to an employer for a job. You should explore
            these routes of becoming a solar panel installer to find out which
            is the right one for you. Although some options have certain
            qualification requirements, many employers are interested in people
            who are enthusiastic, willing to learn and can follow instructions.{" "}
          </p>
        </div>
      </div>

      <div className="six">
        <div className="itme1">
        <div className="item1box">  <div className="thunder"><img src={energy} alt="" /></div>

<h1>Energy Innovators -the products we love</h1>
<p>      There are several routes to becoming a solar panel installer. You
    can gain the qualifications you need by doing a college course or
    anYou should explore these routes of becoming a solar panel</p></div>
        </div>
        <div className="itme2">
          {" "}
          <div className="box">
            <div className="photo">
              <img src={photo} alt="" />{" "}
            </div>

            <h3>Off Grid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              anYou should explore these routes of becoming a solar panel
              installer to find out which is the right one for you. Although
              some options have certain qualification requirements, many
              employers are interested in people who are enthusiastic, willing
              to learn and can follow
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="itme3">
          <div className="box">
            <div className="photo">
              <img src={photo} alt="" />{" "}
            </div>
            <h3>On Grid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              anYou should explore these routes of becoming a solar panel
              installer to find out which is the right one for you. Although
              some options have certain qualification requirements, many
              employers are interested in people who are enthusiastic, willing
              to learn and can follow
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="itme4"></div>
        <div className="itme5">
          <div className="box">
            <div className="photo">
              <img src={photo} alt="" />{" "}
            </div>

            <h3> Hybrid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              anYou should explore these routes of becoming a solar panel
              installer to find out which is the right one for you. Although
              some options have certain qualification requirements, many
              employers are interested in people who are enthusiastic, willing
              to learn and can follow
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="itme6">
          <div className="box">
            <div className="photo">
              <img src={photo} alt="" />{" "}
            </div>
            <h3> Hybrid</h3>
            <p>
              There are several routes to becoming a solar panel installer. You
              can gain the qualifications you need by doing a college course or
              anYou should explore these routes of becoming a solar panel
              installer to find out which is the right one for you. Although
              some options have certain qualification requirements, many
              employers are interested in people who are enthusiastic, willing
              to learn and can follow
            </p>
            <a href="">
              view product <img className="arrow" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solarkits;
