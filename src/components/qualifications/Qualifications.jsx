import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BTech (GPA : 7.1)</h3>
                <span className="qualification__subtitle">
                  Academy of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Higher Secondary (Marks: 85%)</h3>
                <span className="qualification__subtitle">
                  Uttarpara Govt. High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary (Marks: 87%)</h3>
                <span className="qualification__subtitle">
                  Patha Bhavan Dankuni
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2006 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              {/* <div>
                <h3 className="qualification__title">
                  Postman API Fundamentals Student Expert
                </h3>
                <span className="qualification__subtitle">
                  Completed the certification
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2023
                </div>
              </div> 
            </div> */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  HackSquad
                </h3>
                <span className="qualification__subtitle">
                  Participated as a team, secured 62nd position.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct. 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> 
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                 GSSOC (Participant)
                </h3>
                <span className="qualification__subtitle">
                  Participated and completed many successfull merge request
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May-July 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Hacktoberfest 22
                </h3>
                <span className="qualification__subtitle">
                  Completed 4 successfull Merge Request
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct. 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
