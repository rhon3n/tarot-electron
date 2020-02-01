const React = require('react');
const ReactDOM = require('react-dom');

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render () {
    return (
      <Jumbotron>
        <Container>
          <Row className="justify-content-center">
            <h1>React in Electron!</h1>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

// Need to include render here for Babel to transcript JSX
ReactDOM.render(<App />, document.getElementById('root'));
