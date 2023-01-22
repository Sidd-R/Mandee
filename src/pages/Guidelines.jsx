import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Yojanas from "../components/Yojanas";
import News from "../components/News";
import Weather from "../components/Weather";
import "../styles/Guidelines.css";

export default function Guidelines() {
  return (
    <div className="guidelinesPage G-Models" style={{marginTop:"40px"}}>
      <div className="imageSection G-Sales">
        <div className="mainImg">
          <img
            src="https://play-lh.googleusercontent.com/tujTIn2hGCb4oVNNtRH28tuDWDb1Oz3Uc9VL25akbaZ94DG4FBT2nYl4h33TrxkU8w=w600-h300-pc0xffffff-pd"
            alt=""
            style={{ height: "350px", marginTop: "30px" }}
          />
        </div>
        <div className="iconsPallete" style={{ textDecoration: "none" }}>
          <div className="imgGroup">
            <div className="icons" style={{ marginBottom: "50px" }}>
              <img
                src={require("../images/weatherIcon.png")}
                alt=""
                style={{
                  width: "85px",
                  height: "81px",
                  border: "2px solid darkgrey",
                }}
              />
              <a
                href="#Weather"
                style={{ textDecoration: "none", color: "var(--text" }}
              >
                Weather
              </a>
            </div>
            <div className="icons">
              <img
                src={require("../images/newsIcon.png")}
                alt=""
                style={{
                  width: "85px",
                  height: "81px",
                  border: "2px solid darkgrey",
                }}
              />
              <a
                href="#News"
                style={{ textDecoration: "none", color: "var(--text" }}
              >
                News
              </a>
            </div>
          </div>
          <div className="imgGroup">
            <div className="icons" style={{ marginBottom: "50px" }}>
              <img
                src={require("../images/yojanasIcon.png")}
                alt=""
                style={{
                  width: "85px",
                  height: "81px",
                  border: "2px solid darkgrey",
                }}
              />
              <a
                href="#Yojanas"
                style={{ textDecoration: "none", color: "var(--text" }}
              >
                Yojanas
              </a>
            </div>
            <div className="icons">
              <img
                src={require("../images/infoIcon.png")}
                alt=""
                style={{
                  width: "85px",
                  height: "81px",
                  border: "2px solid darkgrey",
                }}
              />
              <a
                href="#Information"
                style={{ textDecoration: "none", color: "var(--text" }}
              >
                Info
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="G-Weather G-Sales">
      <h2 className="subheading">
        Weather
      </h2>
      <Weather />
      </div>
      <div className="G-News G-Sales">
      <h2 className="subheading">
        News
      </h2>
      <News />
      </div>
      <div className="G-Yojanas G-Sales">
      <h2 className="subheading">
        Yojanas
      </h2>
      <Yojanas />
      </div>
      <div className="G-Info G-Sales">
      <Information />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
