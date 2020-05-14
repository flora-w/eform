import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  render() {
    if( this.state.hasError ) {
      return <h1>Please connect Admin!</h1>
    }
    return this.props.children
  }
}