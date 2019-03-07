import * as React from 'react';

export interface IMyTsProps {
  name?: string;
  isMarried: boolean;
};
export interface IMyTsState {age:number;};

class Myts extends React.Component<IMyTsProps, IMyTsState> {
  public static defaultProps: Partial<IMyTsProps> = {
    name: "Tran Duc Anh"
  };
  public state = {
    age: 25
  };
  public render() {
    return (
      <div className="App">
        <h1>My name is {this.props.name} and I am {this.state.age} years old!</h1>
      </div>
    );
  }
}

export default Myts;
