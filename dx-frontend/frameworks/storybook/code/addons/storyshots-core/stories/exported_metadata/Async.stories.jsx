import React from 'react';

export const EXPECTED_VALUE = 'THIS IS SO DONE';
export const TIMEOUT = 5;

class AsyncTestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: EXPECTED_VALUE,
      });
    }, TIMEOUT);
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

export default {
  title: 'Async',
  includeStories: ['WithTimeout'],
};

export const WithTimeout = () => <AsyncTestComponent />;
WithTimeout.storyName = `with ${TIMEOUT}ms timeout simulating async operation`;
