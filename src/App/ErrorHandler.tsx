import { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
  crashScreen: ReactNode;
};

type State = {
  error?: Error;
};

export class ErrorHandler extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) return this.props.crashScreen;
    return this.props.children;
  }
}
