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
import Header from '../Header';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

class App extends React.Component {
  state = {
    inverted: false,
  }

  componentDidMount() {
    // const aboutme = document.querySelector('#about-me');
    // const bar1 = document.querySelector('.bar1');
    // const bar2 = document.querySelector('.bar2');
    // const bar3 = document.querySelector('.bar3');
    //
    // function onEntry(entry) {
    //   console.log(entry[0].isIntersecting);
    //   if (entry[0].intersectionRatio === 1) {
    //     bar1.style.backgroundColor = 'black';
    //     bar2.style.backgroundColor = 'black';
    //     bar3.style.backgroundColor = 'black';
    //   }
    //   else if (entry[0].intersectionRatio !== 1) {
    //     bar1.style.backgroundColor = 'white';
    //     bar2.style.backgroundColor = 'white';
    //     bar3.style.backgroundColor = 'white';
    //   }
    // }
    //
    // const options = {
    //   threshold: [1],
    // };
    //
    // const observer = new IntersectionObserver(onEntry, options);
    // observer.observe(aboutme);
  }

  handleIntersection = (event) => {
    console.log('It works');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');
    console.log(event.isIntersecting);
    if (event.isIntersecting) {
      bar1.style.backgroundColor = 'black';
      bar2.style.backgroundColor = 'black';
      bar3.style.backgroundColor = 'black';
    }
    else if (!event.isIntersecting) {
      bar1.style.backgroundColor = 'white';
      bar2.style.backgroundColor = 'white';
      bar3.style.backgroundColor = 'white';
    }
  }

  handleClick = () => {
    if (window.screen.height < 748) {
      this.setState({ inverted: !this.state.inverted });
    }
  }
  render() {
    const { inverted } = this.state;
    return (
      <div id="app">
        <Header inverted={inverted} handleClick={this.handleClick} />
        <AboutMe handleIntersection={this.handleIntersection} />
        <Skills />
        <Projects handleIntersection={this.handleIntersection} />
        <Contact />
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
