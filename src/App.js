import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button, Image, Card } from 'react-bootstrap';
import Icon from './Icons/Icon';
import ProjectModal from './Projects/ProjectModal';
import Projects from './Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Image src="https://media.licdn.com/dms/image/C4D03AQFVF4-oAdmIrA/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=pFaOhqHI8ofAVlV0ML_-pJisZUPAAUfqwbZ6hf-o8LY" roundedCircle />
          <br />
          <h1>Hi, I'm Bhavik</h1>
          <h5>Full-Stack Software Engineer && Problem Solver</h5>
          <h5>Los Angeles, CA</h5>
          <div className="media-ctn">
            <a title="E-Mail" href="mailto:bhavikpraval@gmail.com"><Icon name="mail" height={50} width={50} /></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/bhavman2/" target="_blank"><Icon name="linkedin" height={50} width={50} /></a>
            <a title="GitHub" href="https://github.com/bhavman2" target="_blank"><Icon name="github" height={50} width={50} /></a>
            <a title="Twitter" href="https://twitter.com/bhavman2" target="_blank"><Icon name="twitter" height={50} width={50} /></a>
          </div>
        </Jumbotron>
        <div className="portfolio-ctn">
          <h1>Portfolio</h1>
          <div className="card-ctn">
            {Projects.map((project, i) =>
              <ProjectModal project={project} key={i} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
