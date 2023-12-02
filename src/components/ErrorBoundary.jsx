// ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Handle the error or log it, e.g., send it to an error tracking service
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>Something went wrong. Please refresh the page or try again later.</p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
