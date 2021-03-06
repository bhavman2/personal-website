import React, { Component } from 'react';
import { Card, Button, Modal, Table } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Card 
        style={{ width: '18rem', height: '8rem' }}>
          <Card.Body>
            <Card.Title>{this.props.project.title}</Card.Title>
            <Button 
            onClick={this.handleShow} 
            variant="light"
            >More Info</Button>
          </Card.Body>
          <Modal 
          show={this.state.show} 
          onHide={this.handleClose}>
            <Modal.Header 
            closeButton>
              <Modal.Title>{this.props.project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ImageCarousel 
              imageUrls={this.props.project.imageUrls} />
              <br />
              <p>{this.props.project.description}</p>
              <Table 
              striped 
              bordered 
              hover 
              size="sm">
                <tbody>
                  {this.props.project.frontend && <tr>
                    <td>Front-End:</td>
                    <td>{this.props.project.frontend}</td>
                  </tr>}
                  {this.props.project.backend && <tr>
                    <td>Back-End:</td>
                    <td>{this.props.project.backend}</td>
                  </tr>}
                  {this.props.project.deployment && <tr>
                    <td>Deployment:</td>
                    <td>{this.props.project.deployment}</td>
                  </tr>}
                  {this.props.project.hardware && <tr>
                    <td>Hardware:</td>
                    <td>{this.props.project.hardware}</td>
                  </tr>}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              {this.props.project.websiteUrl && 
              <Button 
              variant="secondary" 
              href={this.props.project.websiteUrl} 
              target="_blank">
                Website
                  </Button>}
              {this.props.project.githubUrl && 
              <Button 
              variant="secondary" 
              href={this.props.project.githubUrl} 
              target="_blank">
                Github
                  </Button>}
              <Button 
              variant="secondary" 
              onClick={this.handleClose}>
                Close
                  </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>)

  }
}

export default ProjectModal;