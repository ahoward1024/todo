import React from 'react';

class HealthCheck extends React.Component {
  // We need to cancel the asyncronous task if the component is being
  // unmounted otherwise this is a memory leak.
  // Warning: Can't call setState (or forceUpdate) on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application.
  // To fix, cancel all subscriptions and asynchronous tasks in the
  // componentWillUnmount method.
  // https://stackoverflow.com/questions/50428842/cant-call-setstate-or-forceupdate-on-an-unmounted-component
  isCancelled = false;

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
      if (!this.isCancelled && message !== undefined) {
        this.setState({message});
      }
    });
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  render() {
    return (
      <div align="center">
        <h1 className="H1-Animation">Health Check</h1>
        <p className="Server-Message-Animation">{this.state.message}</p>
      </div>
    );
  }
}

export default HealthCheck;
