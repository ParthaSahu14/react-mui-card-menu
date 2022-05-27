import * as React from "react";

interface IErrorProps {
    children: React.ReactNode;
};
interface IErrorState {
    hasError?: boolean;
    error?: Error;
    errorInfo?: React.ErrorInfo
};

class ErrorBoundary extends React.Component<IErrorProps, IErrorState>{
    constructor(props: IErrorProps) {
        super(props);
        this.state = {hasError: false, error: undefined, errorInfo: undefined };
    }

    public static getDerivedStateFromError(_: Error): IErrorState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error);
        console.log('errorInfo', errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError && this.state.error && this.state.errorInfo) {
            // Error path
            return (
              <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                  <br /> <br />
                  {JSON.stringify(this.state.errorInfo)}
                </details>
              </div>
            );
          }
          // Normally, just render children
          return this.props.children;
    }
}

export default ErrorBoundary;