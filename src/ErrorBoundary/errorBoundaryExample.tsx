import * as React from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends React.Component<{}, { counter: number}> {
    constructor(props: any) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 2) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }

const ErrorBoundaryExample: React.FC<{}> = () => {
    
    return (
        <>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </>
    );
}

export default ErrorBoundaryExample;