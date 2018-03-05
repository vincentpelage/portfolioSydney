/*
 * Npm import
 */
import React from 'react';
/*
 * Local import
 */

/*
 * Component
 */


const Skills = () => (
  <div id="skills">
    <p className="h3 white">Skills</p>
    <ul>
      <li>
        <span className="skills-title">HTML5</span>
        <div className="circle">
          <img src="/images/html5.png" alt="HTML5" />
        </div>
      </li>
      <li>
        <span className="skills-title">CSS3</span>
        <div className="circle">
          <img src="/images/css3.png" alt="CSS3" />
        </div>
      </li>
      <li>
        <span className="skills-title">React Redux</span>
        <div className="circle">
          <img src="/images/react-redux.jpeg" alt="React-Redux" />
        </div>
      </li>
      <li>
        <span className="skills-title">Node.js</span>
        <div className="circle">
          <img src="/images/mongodb.png" alt="Node.js" />
        </div>
      </li>
      <li>
        <span className="skills-title">Express.js</span>
        <div className="circle">
          <img src="/images/expressjs.png" alt="Express.js" />
        </div>
      </li>
      <li>
        <span className="skills-title">Docker</span>
        <div className="circle">
          <img src="/images/docker.png" alt="Docker" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">SEO</span>
        <div className="circle">
          <img src="/images/seo.png" alt="SEO" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">SEA</span>
        <div className="circle">
          <img src="/images/sea.png" alt="SEA" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">AdWords Scripts</span>
        <div className="circle">
          <img src="/images/adwords-scripts.png" alt="AdWords Scripts" />
        </div>
      </li>
    </ul>
  </div>
);

/*
 * Export default
 */
export default Skills;
