import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import ThemedApp from './ThemedApp';
import registerServiceWorker from './registerServiceWorker';
import Calendar from 'calendaria';
import './index.css';

// -- material-ui uses this for onTouchTap
injectTapEventPlugin();

// -- only update through actions
useStrict(true);

const calendar = new Calendar(new Date());

const app = (
  <Provider calendar={calendar}>
    <ThemedApp />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
