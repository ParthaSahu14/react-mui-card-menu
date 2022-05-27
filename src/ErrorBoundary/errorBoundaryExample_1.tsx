import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

class BuggyCounter extends React.Component<{}, { counter: number }> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 2) {
      // Simulate a JS error
      throw new Error('Counter should not greater than 2');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

interface IProps {
  error: Error;
  resetErrorBoundary: any;
}

const OurFallbackComponent: React.FC<IProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error.toString()}
        <br />
      </details>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>

  );
};

const ErrorBoundaryExample: React.FC<{}> = () => {

  return (
    <>
      <ErrorBoundary
        FallbackComponent={OurFallbackComponent}
        onError={(error, componentStack) => {
          console.log(error, componentStack);
        }}>
        <BuggyCounter />
      </ErrorBoundary>
    </>
  );
}

export default ErrorBoundaryExample;