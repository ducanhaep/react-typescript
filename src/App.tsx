import * as React from 'react';
import './App.css';
import MyComp from './components/MyComp';
import Myts from './components/MyTS';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Myts
          isMarried={true}
        />
        <MyComp name={"duc anh"} />
        
      </div>
    );
  }
}

export default App;
