import React from 'react';
import ReactDOM from 'react-dom';

import './styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));