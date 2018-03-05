/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
/*
 * Local import
 */

/*
 * Component
 */


const Projects = ({ handleIntersection }) => {
  const options = {
    onChange: handleIntersection,
    root: null,
    rootMargin: '-10% 0% -90%',
  };
  return (
    <Observer {...options}>
      <div id="projects">
        <p className="h3 red">Projects</p>
        <div className="rosiviel">
          <img src="/images/rosivielhome.png" className="project-image-home" alt="Rosiviel HomePage" />
          <img src="/images/rosivieldetail1.png" className="project-image-detail1" alt="Rosiviel Detail 1" />
          <img src="/images/rosivieldetail2.png" className="project-image-detail2" alt="Rosiviel Detail 2" />
          <p className="content">Rosiviel web application was built for <a href="https://www.workuper.com/" alt="Work-Up">Work-Up</a> company. <br />The App consumes AdWords API and provides live datas from AdWords account.</p>
        </div>
      </div>
    </Observer>
  );
};

Projects.propTypes = {
  handleIntersection: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default Projects;
