import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Timer from '../components/Timer';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

storiesOf('Timer', module)
  .add('Show', () => <Timer />)
