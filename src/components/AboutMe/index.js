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

class AboutMe extends React.Component {
  handleClick = () => {
    this.setState({ inverted: !this.state.inverted });
  }

  render() {
    const options = {
      onChange: this.props.handleIntersection,
      root: null,
      rootMargin: '-10% 0% -90%',
    };
    return (
      <Observer {...options}>
        <div id="about-me">
          <p className="h3 red">About Me</p>
          <p className="content">I am a web developer freelance eight years webmarketing experience living in Sydney and currently working on web applications putting into action my development and webmarketing expertise.<br /><br /> I remain available to any opportunity in web development (React.js / Node.js) as a freelancer or for a job sponsorship in Sydney.</p>
          <a href="https://www.linkedin.com/in/vincent-pelage/"><img src="/images/linkedin.png" alt="Vincent Pélage LinkedIn" /></a>
          <p className="content">Find me on Linkedin !</p>
        </div>
      </Observer>
    );
  }
}

AboutMe.propTypes = {
  handleIntersection: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default AboutMe;
