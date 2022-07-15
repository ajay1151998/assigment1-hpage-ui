import React from "react";
import "./Page.css";
import Image1 from "./images/pic1.jpg";
import Image2 from "./images/pic2.jpg";
import Image4 from "./images/pic4.jpg";
import Image5 from "./images/pic5.jpg";
import Image6 from "./images/pic6.jpg";

const Page = () => {
  return (
    <>
      <main>
        {/*----------------------- header -----------------------------*/}
        <header className="main-header">
          <nav className="header-nav">
            <div className="nav-logo">
              <h2>VAMSTAR</h2>
            </div>
            <div className="nav-link">
              <ul>
                <li>Explore</li>
                <li>About</li>
                <li>Cities</li>
                <li>
                  <button>Call</button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-content">
            <h1>
              Rethink Your <br /> Living & Renting
            </h1>
            <p>Make your stay painless with us</p>
          </div>
          <div className="search-filter">
            <div className="filter-item">
              <span>City</span>
              <br />
              <span>Select your City</span>
            </div>
            <div className="filter-item">
              <span>Date</span>
              <br />
              <span>Select your Date</span>
            </div>
            <div className="filter-item">
              <span>Guests</span>
              <br />
              <span>Add guests</span>
            </div>
            <div className="filter-button">
              <button className="btn-style">Search</button>
            </div>
          </div>
        </header>
        {/* ---------------------------------Explore-------------------------------------------- */}
        <section id="explore">
          <div className="section-heading">
            <h1>Explore</h1>
            <p>From one guest rooms to</p>
            <p>Penthouses with pools and gardens</p>
          </div>
          <div className="explore-body">
            <div className="explore-card">
              <div className="card-image">
                <img src={Image1} alt="images" />
              </div>
              <div className="card-widgit">
                <button className="btn-style widgit-info"> 35$</button>
                <button className="btn-style widgit-info">
                  328m<sup>2</sup>
                </button>
                <button className="btn-style widgit-book">Book!</button>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image2} alt="images" />
              </div>
              <div className="card-widgit">
                <button className="btn-style widgit-info"> 35$</button>
                <button className="btn-style widgit-info">
                  {" "}
                  328m<sup>2</sup>
                </button>
                <button className="btn-style widgit-book">Book!</button>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image1} alt="images" />
              </div>
              <div className="card-widgit">
                <button className="btn-style widgit-info"> 35$</button>
                <button className="btn-style widgit-info">
                  328m<sup>2</sup>
                </button>
                <button className="btn-style widgit-book">Book!</button>
              </div>
            </div>
          </div>
        </section>
        {/*------------------------------------ About Us Part--------------------------------------- */}
        <section id="about">
          <div className="section-heading">
            <h1>About Us</h1>
            <p>Allow us to tell you a short story</p>
          </div>
          <div className="explore-body">
            <div className="explore-card">
              <div className="card-image">
                <img src={Image4} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter I</h1>
                <p>
                  True hospitality is marked by an open response to the dignity
                </p>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image5} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter II</h1>
                <p>My definition of a good hotel is a place I’d stay at</p>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image6} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter III</h1>
                <p>
                  The great advantage of a hotel is that it is a refuge from
                  home life
                </p>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image6} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter IV</h1>
                <p>
                  Entertaining doesn’t need to be a difficult or daunting
                  process
                </p>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image5} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter V</h1>
                <p>
                  Intelligent luxury is all about thinking about what really is
                </p>
              </div>
            </div>
            <div className="explore-card">
              <div className="card-image">
                <img src={Image4} alt="images" />
              </div>
              <div className="about-widgit">
                <h1>Chapter VI</h1>
                <br />
                <p>Your most unhappy customers are your greatest source of</p>
              </div>
            </div>
          </div>
        </section>
        {/* -----------------------------------------footer part ------------------------------------*/}
        <footer className="footer-nav">
          <div className="footer-left">
            <h1>My Website</h1>
            <ul>
              <li>@ 2021 Company Name</li>
              <li>All rights reserved</li>
            </ul>
          </div>

          <div className="footer-right">
            <ul>
              <li>Explore</li>
              <li>About</li>
              <li>Cities</li>
              <li>
                <button>Call</button>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Page;
