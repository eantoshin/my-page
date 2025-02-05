import { Component, ComponentChildren } from 'preact';

interface Props {
  children: ComponentChildren;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          Что-то пошло не так. Пожалуйста, обновите страницу.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
