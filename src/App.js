import logo from "./react-logo-xs.png";
import "./App.css";
import { useState } from "react";

const content = [
  [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND-CSS",
    "JAVASCRIPT",
    "REACTJS",
    "REACT-ROUTER",
    "REDUX",
  ],
  ["LISTENING MUSIC", "PLAYING CRICKET", "WATCHING MOVIES"],
  [
    "B.TECH- ANDHRA LOYOLA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    "INTER - SRI CHAITANYA",
    "10TH - BHASHYAM PUBLIC SCHOOL",
  ],
];

function App() {
  const [activeContentIndex, setActiveCountIndex] = useState(0);
  return (
    <div className="">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
          <h1>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/rohit-vara-prasad-rayavarapu-224358142/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ROHIT VARA PRASAD RAYAVARAPU
            </a>
          </h1>
          <h1>
            <a
              className="App-link"
              href="https://github.com/rohit-rayavarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Git
            </a>
          </h1>
        </>
      </header>
      <div>
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>
          <i>
            An ambitious, organized, and dependable candidate, successful at
            managing multiple priorities with a positive attitude. I am flexible
            in my working hours, being able to work in the evenings and
            weekends. I'm skilled at working under pressure and adapting to new
            situations and ideas to best enhance the organizational brand. I am
            committed to learning and self-development so that I can
            consistently achieve better results.
          </i>
        </p>
      </div>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveCountIndex(0)}
          >
            Technologies
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveCountIndex(1)}
          >
            Hobbies
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveCountIndex(2)}
          >
            Education
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ maxWidth: "60%", backgroundColor: "red" }}>
          <h3>HISTORY</h3>
          <p>
            <ul>
              <li>
                Created mobile applications based on React, integrating
                Facebook's best practices for interface design.
              </li>

              <li>
                Designed and updated layouts to meet usability and performance
                requirements.
              </li>

              <li>
                Worked with cross-functional design teams to create software
                solutions that improved overall functionality and performance.
              </li>
              <li>
                Followed SDLC best practices within Agile environment to produce
                rapid iterations for clients.
              </li>
              <li>
                Coded using HTML, CSS and JavaScript to develop features for
                both mobile an
              </li>
              <li>
                d desktop platforms. Collaborated with team to determine
                application requirement specifications.
              </li>
              <li>Used JavaScript to manipulate HTML pages using DOM.</li>
              <li>Used React to make components function using Virtual DOM.</li>
              <li>
                Built components on own and used component libraries as per the
                project requirements.
              </li>
              <li>
                Used Node NPM (node package manager) to manage packages among
                the project.
              </li>
            </ul>
          </p>
        </div>
        <div style={{ maxWidth: "40%", backgroundColor: "teal" }}>
          <h3>SKILLS</h3>
          <p>
            <ul>
              <li>Self-Motivated</li>
              <li>Analytical and Critical Thinking</li>
              <li>Interpersonal Communication</li>
              <li>Good Telephone Etiquette</li>
              <li> Solving problems with ease</li>
              <li>Attention to Detail</li>
              <li>Decision-making</li>
              <li>Flexible and Adaptable</li>
              <li>Multitasking Abilities</li>
              <li>Teamwork</li>
              <li>Computer proficiency</li>
              <li>Ability to work under pressure</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
