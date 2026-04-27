import React from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Component crashed: ", error, errorInfo.componentStack);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Un problème est survenu.</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
