import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
          <div className="bg-white shadow-lg p-8 rounded-xl max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">🚨 Oops! Something went wrong.</h2>
            <p className="text-gray-700 mb-6">
              An unexpected error occurred. Please try again or reload the page.
            </p>
            <button
              onClick={this.handleReload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
