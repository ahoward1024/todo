import React from 'react';
import PropTypes from 'prop-types';

class HealthCheckMessage extends React.Component {
  render() {
    return (
      <div>
        <p className={this.props.animation}>{this.props.message}</p>
      </div>
    );
  }
}

HealthCheckMessage.propTypes = {
  'animation': PropTypes.string,
  'message': PropTypes.string
};

class HealthCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'message': 'Checking...'};
  }

  static async getResponse() {
    const url = 'http://localhost:5000/testing';
    let message = '';
    try {
      const response = await fetch(url, {'method': 'GET'});
      console.log(response);
      const json = await response.json();
      console.log(json);
      message = await json.message;
    } catch (exception) {
      console.log(`Error ${exception}`);
      message = `❌ server error${exception}`;
    }

    return message;
  }

  componentDidMount() {
    return HealthCheck.getResponse().then(message => {
      if (message !== undefined) {
        this.setState({message});
      }
    });
  }

  componentWillUnmount() {
    this.setState({'message': 'Checking...'});
  }

  render() {
    const messageElement = [];
    if (this.state.message === '✔️ The server is up! 👌') {
      messageElement.push(
        <HealthCheckMessage
          animation="Server-Message-Success"
          message={this.state.message}
        />
      );
    } else if (this.state.message === 'Checking...') {
      messageElement.push(<p>{this.state.message}</p>);
    } else {
      messageElement.push(
        <HealthCheckMessage
          animation="Server-Message-Error"
          message={this.state.message}
        />
      );
    }

    return (
      <div align="center">
        <h1 className="H1-Animation">Health Check</h1>
        {messageElement}
      </div>
    );
  }
}

export default HealthCheck;
