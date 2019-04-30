import React, { Component } from 'react';
import { Jumbotron, Image, Spinner, Carousel } from 'react-bootstrap';
import Icon from '../Icons/Icon';
import ProjectModal from '../Projects/ProjectModal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      projects: [],
      quotes: []
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getProjects();
    this.getQuotes();
  }

  getProjects = () => {
    fetch("https://s3-us-west-1.amazonaws.com/bhavik-personal-website/Projects.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ projects: data, isLoading: false });
      })
      .catch((err) => {
        console.log("Error getting projects from S3")
      });
  }

  getQuotes = () => {
    fetch("https://s3-us-west-1.amazonaws.com/bhavik-personal-website/quotes.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ quotes: data });
      })
      .catch((err) => {
        console.log("Error getting quotes from S3")
      });
  }

  render() {
    return (
      <div 
      className="App">
        <Jumbotron>
          <Image 
          src="https://s3-us-west-1.amazonaws.com/bhavik-personal-website/headshot2.jpg" 
          roundedCircle />
          <br />
          <h1>Hi, I'm Bhavik</h1>
          <h5>Software Engineer && Problem Solver</h5>
          <h5>Los Angeles, CA</h5>
          {this.state.quotes.length !== 0 && 
          <Carousel 
          className="quote-ctn">
            {this.state.quotes.map((quote, i) => {
              return <Carousel.Item key={i}>{quote.quote}</Carousel.Item>
            })
            }
          </Carousel>}
          <div className="media-ctn">
            <a
              title="E-Mail"
              href="mailto:bhavikpraval@gmail.com">
              <Icon
                name="mail"
                height={50}
                width={50} /></a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/bhavman2/"
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                name="linkedin"
                height={50}
                width={50} /></a>
            <a
              title="GitHub"
              href="https://github.com/bhavman2"
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                name="github"
                height={50}
                width={50} /></a>
          </div>
        </Jumbotron>
        <div
          className="portfolio-ctn">
          <h1>Project Portfolio</h1>
          <div
            className="card-ctn">
            {this.state.isLoading &&
              <Spinner
                animation="border"
                role="status">
                <span
                  className="sr-only">Loading...</span>
              </Spinner>}
            {this.state.projects.map((project, i) =>
              <ProjectModal
                project={project}
                key={i} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
